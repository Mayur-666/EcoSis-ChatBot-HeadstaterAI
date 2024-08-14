"use client";
import { useState } from "react";
import { RiRobot3Fill, RiUser3Line } from "react-icons/ri";
import { IoIosSend } from "react-icons/io";

export default function Home() {
  const [messages, setMessages] = useState([
    {
      role: "user",
      parts: [
        {
          text: "I want you to work as ai customer support for an ecommerce website. Your name is Eco-Sis.",
        },
      ],
    },
    {
      role: "model",
      parts: [{ text: "Hello there! I am Eco-Sis. How can I help you?" }],
    },
  ]);
  const [inputMsg, setInputMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    setLoading(true)
    setMessages([...messages, {role: "user", parts: [{text: inputMsg}]}])
    setInputMsg("")
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({history : messages, message: inputMsg }),
    })
    const data = await res.json();
    setMessages((message) => [...message, {role: "model", parts: [{text: data.message}]}]);
    setLoading(false)
  } 
  
  return (
    <div className="w-dvw h-dvh p-5 flex items-center justify-center">
      <div
        className="w-full relative md:w-3/5"
        style={{ height: "85vh" }}
      >
        <h1 className="text-2xl text-center w-full my-3 p-2">AI customer support</h1>
        <div className="overflow-y-scroll" style={{height: "60vh", maxHeight: "60vh"}}>
          {messages.map((message, i) => i>0 && (
            <div key={i} className={`my-2 flex ${message.role === "model" ? " justify-start" : "justify-end"} w-full px-2`}>
              {message.parts.map((part, j) => (
                <div key={j} className={`border flex items-center 
                ${message.role === "model" ? "justify-start" : "justify-end"} w-10/12`}>
                 {
                message.role === "model" && <RiRobot3Fill className="text-2xl bg-white text-black rounded-full p-2 w-8 h-8 mx-4" /> 
                }
                <p
                  key={j}
                  className={`
                    ${message.role === "model"
                      ? "text-left"
                      : "text-right"} my-4 w-10/12
                  `}
                  >
                  {part.text}
                </p>
                { message.role !== "model" &&
                <RiUser3Line className="text-2xl bg-white text-black rounded-full p-2 w-8 h-8 mx-2 "/>
                }
                </div>
              ))}
            </div>
          ))}
          {loading == true && 
            <div key={1000} className="loading p-1 text-3xl w-fit ml-4 mx-auto">
            </div>
          }
        </div>
        <div className="flex absolute bottom-0 w-full px-5 py-2 items-center justify-evenly">
          <input
            type="text"
            className="w-10/12 p-2 rounded-lg bg-transparent border "
            placeholder="Type your message"
            value={inputMsg}
            onChange={(e) => setInputMsg(e.target.value)}
          />
          <button className={` py-2 rounded-lg ml-3 px-5 text-2xl ${inputMsg.trim().length>0 ? "bg-gray-600 text-white" : "bg-gray-400 text-black"}`}
          disabled={inputMsg.trim().length>0 ? false: true}
          onClick={sendMessage}>
            <IoIosSend />
          </button>
        </div>
      </div>
    </div>
  );
}
