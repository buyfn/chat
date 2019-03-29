export default {
  mongoURL: process.env.MONGO_URL,
  port: process.env.PORT || 3000,
  url: process.env.URL || 'http://localhost',
  secret: process.env.SECRET,
};
