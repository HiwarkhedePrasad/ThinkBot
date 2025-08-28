import React, { useState, useEffect, useRef } from "react";
import io from "socket.io-client";

const socket = io("https://thinkbot-backend.onrender.com");

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [botTyping, setBotTyping] = useState(false);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);
  const chatContainerRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, botTyping]);

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
    <div className="h-screen flex flex-col bg-[#1f1f1f] text-white overflow-hidden">
      {/* Header */}
      <div className="flex-shrink-0 bg-[#2a2a2a] border-b border-[#333] px-4 sm:px-6 py-3 sm:py-4 shadow-lg">
        <h1 className="text-lg sm:text-xl font-semibold text-center text-white">
          Thinkbot
        </h1>
      </div>

      {/* Chat Messages Area - Custom scrollbar hidden */}
      <div 
        ref={chatContainerRef}
        className="flex-1 overflow-y-auto pb-2"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>
        
        <div className="min-h-full">
          {messages.length === 0 ? (
            <div className="flex items-center justify-center h-full px-4">
              <div className="text-center text-gray-400 max-w-md">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">B</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-white">
                  Welcome to Thinkbot
                </h2>
                <p className="text-sm sm:text-base">
                  Start a conversation by typing a message below.
                </p>
              </div>
            </div>
          ) : (
            <div className="py-2 sm:py-4">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`px-3 sm:px-4 py-4 sm:py-6 transition-all duration-200 ${
                    msg.sender === "User" 
                      ? "bg-[#1f1f1f] hover:bg-[#252525]" 
                      : "bg-[#2a2a2a] hover:bg-[#303030]"
                  }`}
                >
                  <div className="max-w-3xl mx-auto flex gap-3 sm:gap-4">
                    <div className="flex-shrink-0">
                      <div
                        className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm font-semibold shadow-md ${
                          msg.sender === "User"
                            ? "bg-blue-500 text-white"
                            : "bg-green-500 text-white"
                        }`}
                      >
                        {msg.sender === "User" ? "U" : "B"}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold mb-1 text-xs sm:text-sm text-gray-300">
                        {msg.sender === "User" ? "You" : "Thinkbot"}
                      </div>
                      <div className="text-white whitespace-pre-wrap break-words text-sm sm:text-base leading-relaxed">
                        {msg.text}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
              {botTyping && (
                <div className="px-3 sm:px-4 py-4 sm:py-6 bg-[#2a2a2a] animate-fadeIn">
                  <div className="max-w-3xl mx-auto flex gap-3 sm:gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm font-semibold bg-green-500 text-white shadow-md">
                        B
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold mb-1 text-xs sm:text-sm text-gray-300">
                        Thinkbot
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex gap-1">
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full animate-pulse"></div>
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full animate-pulse" style={{animationDelay: "0.2s"}}></div>
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full animate-pulse" style={{animationDelay: "0.4s"}}></div>
                        </div>
                        <span className="text-gray-400 text-xs sm:text-sm">Typing...</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          )}
        </div>
      </div>

      {/* Input Area - Fixed to bottom */}
      <div className="flex-shrink-0 bg-[#1f1f1f] border-t border-[#333] px-3 sm:px-4 py-3 sm:py-4 shadow-2xl">
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <div className="relative">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    sendMessage(e);
                  }
                }}
                className="w-full p-3 sm:p-4 pr-12 sm:pr-16 rounded-xl border border-[#333] bg-[#2a2a2a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-sm sm:text-base shadow-lg"
                placeholder="Send a message..."
                maxLength={2000}
              />
              <button
                onClick={sendMessage}
                disabled={!input.trim()}
                className={`absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center transition-all duration-200 shadow-md ${
                  input.trim()
                    ? "bg-blue-500 hover:bg-blue-600 text-white hover:shadow-lg hover:scale-105 active:scale-95"
                    : "bg-[#333] text-gray-500 cursor-not-allowed"
                }`}
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
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
            </div>
          </div>
          <div className="text-xs text-gray-500 text-center mt-2 px-2">
            Thinkbot can make mistakes. Consider checking important information.
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Chatbot;
