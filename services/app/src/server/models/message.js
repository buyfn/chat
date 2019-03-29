import mongoose from 'mongoose';

const messageSchema = mongoose.Schema({
  username: String,
  message: String,
  posted: {
    type: Date,
    default: Date.now,
  },
});

const Message = mongoose.model('Message', messageSchema);

export default Message;
