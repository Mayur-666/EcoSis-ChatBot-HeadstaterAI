import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAi = new GoogleGenerativeAI(process.env.GEMINI);
const model = genAi.getGenerativeModel({
  model: "gemini-1.5-flash"
  // gemini-1.0-pro
})

export async function POST(req) {

  // get query from user input
  const data = await req.json();

  const chat = model.startChat({ 
    history: data.history,
  });

  let result = await chat.sendMessage(data.message);
  const res = await result.response.text();
  return NextResponse.json({ message: res }, {status: 200});
}
