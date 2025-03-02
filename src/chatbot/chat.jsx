import React, { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io("https://thinkbot-ggwc.onrender.com");

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
    <div className="h-screen flex flex-col items-center justify-center bg-[#1f1f1f] text-white">
      <h2 className="text-2xl font-semibold mb-4">Thinkbot</h2>
      <div className="w-[90%] md:w-[50%] h-[400px] overflow-y-auto bg-[#2a2a2a] p-4 rounded-lg shadow-lg">
        {messages.map((msg, index) => (
          <div key={index} className="mb-2">
            <strong
              className={
                msg.sender === "User" ? "text-blue-400" : "text-green-400"
              }
            >
              {msg.sender}:
            </strong>{" "}
            {msg.text}
          </div>
        ))}
        {botTyping && (
          <div className="text-green-400">
            <strong>Bot:</strong> Typing...
          </div>
        )}
      </div>
      <form onSubmit={sendMessage} className="w-[90%] md:w-[50%] mt-4 flex">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 p-2 rounded-l-lg border-none bg-[#333] text-white focus:outline-none"
          placeholder="Type your message..."
        />
        <button
          type="submit"
          className="p-2 bg-blue-500 rounded-r-lg hover:bg-blue-600 transition"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Chatbot;
