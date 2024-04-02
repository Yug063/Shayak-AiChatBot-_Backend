import mongoose from "mongoose";
// import { randomUUID } from "crypto";
const chatSchema = new mongoose.Schema({
// if you want to create id else id is automatically created by mongoDB
//   id: {
//     type: String,
//     default: randomUUID(),
//   },
// role : user{quesion asked} or bot{response of question answered by gemini}
  role: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  chats: [chatSchema],
});

export default mongoose.model("User", userSchema);