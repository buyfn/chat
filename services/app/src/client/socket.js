import io from 'socket.io-client';

// const { URL, PORT } = process.env;
const URL = process.env.URL;
const PORT = process.env.PORT;

console.log(URL, PORT);

const socket = io();

export default socket;
