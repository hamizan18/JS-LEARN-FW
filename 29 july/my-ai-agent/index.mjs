// 1. Baca file .env
import 'dotenv/config';

// 2. Import Gemini dari LangChain
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";

// 3. Buat model Gemini
const model = new ChatGoogleGenerativeAI({
  apiKey: process.env.GOOGLE_API_KEY,
  model: "gemini-pro", // model teks standar Gemini
  temperature: 0.7,
});

// 4. Kirim prompt ke Gemini
const res = await model.invoke("Apa itu AI Agent dan bagaimana cara kerjanya?");

// 5. Tampilkan jawaban AI
console.log("🤖 Jawaban Gemini:\n", res.content);
