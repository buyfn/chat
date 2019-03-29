import path from 'path';
import http from 'http';
import express from 'express';
import session from 'express-session';
import bodyParser from 'body-parser';
import SocketIO from 'socket.io';
import bcrypt from 'bcryptjs';
import mongoose from 'mongoose';
import debug from 'debug';

import Message from './models/message';
import User from './models/user';

import serverConfig from './config';

const appLog = debug('chat');
const dbLog = debug('chat:db');

const app = express();
const server = http.Server(app);
const io = new SocketIO(server);

mongoose.connect(serverConfig.mongoURL).then(
  () => dbLog('connected to db'),
  err => dbLog(err),
);

const indexPath = path.join(__dirname, '../../dist/index.html');

app.use(express.static('dist'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  secret: serverConfig.secret,
  resave: true,
  saveUninitialized: true,
}));

let onlineUsers = 0;

app.get('/', (req, res) => res.sendFile(indexPath));

app.get('/online', (req, res) => {
  res.send(JSON.stringify(onlineUsers));
});

app.get('/messages', (req, res) => {
  const now = new Date();
  const yesterday = now.setDate(now.getDate() - 1);
  Message.find({ posted: { $gte: yesterday, $lt: new Date() } })
    .select('message username posted')
    .exec((err, messages) => {
      res.send(JSON.stringify(messages));
    });
});

app.post('/signup', (req, res) => {
  const { username, password } = req.body;
  const user = new User({ username, password });
  user.save((err, data) => {
    if (err) {
      if (err.code === 11000) {
        res.send({ result: false, errorMsg: 'username taken' });
        return;
      }
      res.send({ result: false, errorMsg: err });
      return;
    }
    req.session.userId = data._id; // eslint-disable-line no-underscore-dangle
    req.session.username = user.username;
    res.send({ result: true });
  });
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  User.findOne({ username }, '_id username password', (err, user) => {
    if (err) {
      appLog(`error while trying to login ${err}`);
      res.send({ result: false, errorMsg: 'unable to login' });
    }
    if (!user) {
      res.send({ result: false, errorMsg: 'user not found' });
    } else if (user && bcrypt.compareSync(password, user.password)) {
      req.session.userId = user._id; // eslint-disable-line no-underscore-dangle
      req.session.username = user.username;
      appLog(`user ${user.username} logged in`);
      res.send({ result: true });
    } else {
      appLog(`failed attempt to login as ${user.username}`);
      res.send({ result: false, errorMsg: 'incorrect password' });
    }
  });
});

app.post('/logout', (req, res) => {
  appLog(`user ${req.session.username} logged out`);
  req.session.destroy();
  res.send('logged out!');
});

app.get('/user', (req, res) => {
  const { username } = req.session;
  res.send(username ? { loggedIn: true, username } : { loggedIn: false });
});

io.on('connect', (socket) => {
  appLog('a user connected');
  onlineUsers += 1;
  io.emit('connected', onlineUsers);

  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
    const message = new Message({ username: msg.username, message: msg.text });
    message.save((err, messageText) => {
      if (err) {
        dbLog(`Error while trying to save message: ${err}`);
      }
      dbLog(`Saved message: ${messageText}`);
    });
  });

  socket.on('disconnect', () => {
    appLog('a user disconnected');
    onlineUsers -= 1;
    io.emit('disconnected', onlineUsers);
  });
});

server.listen(serverConfig.port, () =>
  appLog(`listening on port ${serverConfig.port}`));
