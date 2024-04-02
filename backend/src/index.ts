import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import appRouter from "./routes/index.js";
import cookieParser from "cookie-parser";
dotenv.config();
const app = express();
// database
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("database connected successfully!"))
  .catch((err) => console.log(err));
// Middlewares
app.use(cors());
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use("/shayak-api", appRouter);
//start the server
app.listen(process.env.PORT || 5000, () => {
  console.log("Backend server is running!");
});
