import React from "react";
import { FaGooglePlay } from "react-icons/fa";

const Download = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-[#1f1f1f] text-white">
      <h2 className="text-3xl font-bold mb-2">🚀 Android App Coming Soon!</h2>
      <p className="text-gray-300 mb-4">
        Our Android app launches <strong>comming Soon</strong>. Stay tuned!
      </p>

      <div className="flex items-center gap-4">
        <button
          disabled
          className="flex items-center gap-2 px-5 py-3 bg-gray-700 text-gray-400 cursor-not-allowed rounded-lg shadow-md"
        >
          <FaGooglePlay size={24} />
          <span>Coming Soon</span>
        </button>
      </div>

      <p className="mt-4 text-gray-500 text-sm">
        📅 Available on Google Play from Feb 15, 2025
      </p>
    </div>
  );
};

export default Download;
