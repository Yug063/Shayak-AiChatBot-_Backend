import { Router } from "express";
import {
  getAllUsers,
  userLogin,
  userSignup,
  verifyUser,
  userLogout
} from "../controllers/user-controllers.js";
import { verifyToken } from "../utils/token-manager.js";
const userRouter = Router();
userRouter.get("/", getAllUsers);
userRouter.post("/login", userLogin);
userRouter.post("/signup", userSignup);
userRouter.get("/auth-status", verifyToken, verifyUser);
userRouter.get("/logout", verifyToken, userLogout);
export default userRouter;
