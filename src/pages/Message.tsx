import React from "react";

const Message = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-500 px-4 animate-gradient-x relative">
      <div className="glass-container text-center">
        <h2 className="text-4xl font-bold text-pink-600 mb-6 animate-pulse-text">
          A Message From My Heart 💌
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Thank you for being my love, my strength, and my happiness. Every day with you feels like a celebration. ❤️
        </p>
      </div>

      {/* Instruction */}
      <p className="absolute bottom-4 text-white text-sm text-center w-full">
        Home: top-left 🏠 | Gallery: top-right 📸 | Celebration: bottom-left 🎉
      </p>
    </div>
  );
};

export default Message;
