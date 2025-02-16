import React from "react";

const ChatShowcase = () => {
  return (
    <div className="bg-black text-white py-12 flex flex-col items-center space-y-12">
      {/* Section 1 */}
      <div className="text-center text-lg font-semibold">
        Summarize meetings. Find new insights. Increase productivity.
      </div>
      <div className="bg-gradient-to-br from-blue-300 rounded-lg shadow-lg w-3/4 p-6">
        <ChatWindow />
      </div>

      {/* Section 2 */}
      <div className="text-center text-lg font-semibold">
        Generate and debug code. Automate repetitive tasks. Learn new APIs.
      </div>
      <div className="bg-gradient-to-br from-blue-300 rounded-lg shadow-lg w-3/4 p-6">
        <ChatWindow />
      </div>
    </div>
  );
};

const ChatWindow = () => {
  return (
    <div className="flex bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-200 p-4">
        <h2 className="font-semibold">ThinkBot</h2>
        <ul className="mt-4 space-y-2 text-gray-700 text-sm">
          <li>Home</li>
          <li>New Chat</li>
          <li>History</li>
          <li>Settings</li>
        </ul>
      </div>

      {/* Chat Area */}
      <div className="w-3/4 p-6 text-black">
        <div className="bg-gray-100 p-3 rounded-lg text-sm mb-4">
          Can you summarize this meeting?
        </div>
        <div className="bg-gray-200 p-3 rounded-lg text-sm">
          Sure! Here’s a quick summary of the discussion...
        </div>

        {/* Chat Input */}
        <div className="mt-6 flex items-center border-t pt-4">
          <input
            type="text"
            placeholder="Message ThinkBot..."
            className="flex-1 p-2 rounded-lg border border-gray-300 text-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default ChatShowcase;
