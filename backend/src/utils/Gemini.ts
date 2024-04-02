import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
dotenv.config();
export const createChat = async (prompt: string) => {
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY); // Instantiate GenerativeAI

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const result = await model.generateContent(prompt);
    const response = await result.response.text(); // Wait for response.text() to resolve
    return response;
  } catch (error) {
    console.error("Error:", error); // Log any errors
    throw error; // Throw the error to be caught by the caller
  }
};

