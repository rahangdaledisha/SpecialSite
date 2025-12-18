import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-300 animate-gradient-x p-4">
      <div className="card-shadow text-center">
        <h1 className="text-6xl font-extrabold text-pink-600 animate-pulse-text mb-6">
          💕 Happy Anniversary 💕
        </h1>
        <p className="text-gray-700 text-lg mb-8">
          Celebrating love, laughter, and beautiful memories together.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/gallery" className="btn-gradient">
            View Memories 📸
          </Link>
          <Link to="/celebration" className="btn-gradient">
            See Celebration 🎉
          </Link>
          <Link to="/message" className="btn-gradient">
            Read My Message 💌
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
