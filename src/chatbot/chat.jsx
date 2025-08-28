import React, { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io("https://thinkbot-backend.onrender.com");

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [botTyping, setBotTyping] = useState(false);

  useEffect(() => {
    socket.on("bot_message_chunk", (chunk) => {
      setBotTyping(true);
      setMessages((prevMessages) => {
        if (
          prevMessages.length > 0 &&
          prevMessages[prevMessages.length - 1].sender === "Bot"
        ) {
          // Update last bot message with the new chunk
          const updatedMessages = [...prevMessages];
          updatedMessages[updatedMessages.length - 1].text += chunk;
          return updatedMessages;
        } else {
          // Start a new bot message
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

  const [input, setInput] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "User", text: input },
      ]);
      socket.emit("user_message", input);
      setInput("");
    }
  };

  return (
    <div className="h-screen flex flex-col bg-[#1f1f1f] text-white">
      {/* Header */}
      <div className="flex-shrink-0 bg-[#2a2a2a] border-b border-[#333] px-6 py-4">
        <h1 className="text-xl font-semibold text-center">Thinkbot</h1>
      </div>

      {/* Chat Messages Area */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto">
          {messages.length === 0 ? (
            <div className="flex items-center justify-center h-full">
              <div className="text-center text-gray-400">
                <h2 className="text-2xl font-semibold mb-2">Welcome to Thinkbot</h2>
                <p>Start a conversation by typing a message below.</p>
              </div>
            </div>
          ) : (
            <div className="py-4">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`px-4 py-6 ${
                    msg.sender === "User" ? "bg-[#1f1f1f]" : "bg-[#2a2a2a]"
                  }`}
                >
                  <div className="max-w-3xl mx-auto flex gap-4">
                    <div className="flex-shrink-0">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                          msg.sender === "User"
                            ? "bg-blue-500 text-white"
                            : "bg-green-500 text-white"
                        }`}
                      >
                        {msg.sender === "User" ? "U" : "B"}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold mb-1 text-sm text-gray-300">
                        {msg.sender === "User" ? "You" : "Thinkbot"}
                      </div>
                      <div className="text-white whitespace-pre-wrap">
                        {msg.text}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
              {botTyping && (
                <div className="px-4 py-6 bg-[#2a2a2a]">
                  <div className="max-w-3xl mx-auto flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold bg-green-500 text-white">
                        B
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold mb-1 text-sm text-gray-300">
                        Thinkbot
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="flex gap-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{animationDelay: "0.2s"}}></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{animationDelay: "0.4s"}}></div>
                        </div>
                        <span className="text-gray-400 text-sm ml-2">Typing...</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Input Area */}
      <div className="flex-shrink-0 bg-[#1f1f1f] border-t border-[#333] px-4 py-4">
        <div className="max-w-3xl mx-auto">
          <form onSubmit={sendMessage} className="relative">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full p-4 pr-16 rounded-xl border border-[#333] bg-[#2a2a2a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              placeholder="Send a message..."
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className={`absolute right-2 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-lg flex items-center justify-center transition-all ${
                input.trim()
                  ? "bg-blue-500 hover:bg-blue-600 text-white"
                  : "bg-[#333] text-gray-500 cursor-not-allowed"
              }`}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
            </button>
          </form>
          <div className="text-xs text-gray-500 text-center mt-2">
            Thinkbot can make mistakes. Consider checking important information.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
