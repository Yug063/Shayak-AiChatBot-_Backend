import { Router } from "express";
import { verifyToken } from "../utils/token-manager.js";
import { deleteChats, generateChatCompletionWithGemini, sendChatsToUser } from "../controllers/chat-controllers.js";
const chatRouter = Router();
chatRouter.post("/new",verifyToken,generateChatCompletionWithGemini);
chatRouter.get("/all-chats", verifyToken, sendChatsToUser);
chatRouter.delete("/delete", verifyToken, deleteChats);
export default chatRouter;