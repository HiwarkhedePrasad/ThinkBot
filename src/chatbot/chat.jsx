import React, { useState, useEffect, useRef } from "react";
import io from "socket.io-client";

const socket = io("https://thinkbot-backend.onrender.com");

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [botTyping, setBotTyping] = useState(false);
  const [input, setInput] = useState("");
  const chatEndRef = useRef(null);

  useEffect(() => {
    socket.on("bot_message_chunk", (chunk) => {
      setBotTyping(true);
      setMessages((prevMessages) => {
        if (
          prevMessages.length > 0 &&
          prevMessages[prevMessages.length - 1].sender === "Bot"
        ) {
          const updatedMessages = [...prevMessages];
          updatedMessages[updatedMessages.length - 1].text += chunk;
          return updatedMessages;
        } else {
          return [...prevMessages, { sender: "Bot", text: chunk }];
        }
      });
    });

    socket.on("bot_message_done", () => {
      setBotTyping(false);
    });

    return () => {
      socket.off("bot_message_chunk");
      socket.off("bot_message_done");
    };
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, botTyping]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: "User", text: input },
    ]);
    socket.emit("user_message", input);
    setInput("");
  };

  return (
    <div className="h-screen flex flex-col bg-[#f7f7f8] text-gray-900">
      <header className="bg-white shadow p-4 text-center text-2xl font-bold">
        Thinkbot
      </header>

      <main className="flex-1 overflow-y-auto p-6">
        <div className="max-w-4xl mx-auto space-y-4">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex ${
                msg.sender === "User" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`rounded-xl px-4 py-2 max-w-[70%] break-words ${
                  msg.sender === "User"
                    ? "bg-blue-500 text-white rounded-br-none"
                    : "bg-gray-200 text-gray-900 rounded-bl-none"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {botTyping && (
            <div className="flex justify-start">
              <div className="bg-gray-200 text-gray-900 rounded-bl-none rounded-xl px-4 py-2 animate-pulse">
                Typing...
              </div>
            </div>
          )}
          <div ref={chatEndRef} />
        </div>
      </main>

      <form
        onSubmit={sendMessage}
        className="bg-white p-4 flex max-w-4xl mx-auto w-full shadow-t"
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 border border-gray-300 rounded-l-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-2 rounded-r-full hover:bg-blue-600 transition"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Chatbot;
