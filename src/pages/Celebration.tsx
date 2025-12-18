import React from "react";

const Celebration = () => {
  const moments = [
    { icon: "💍", text: "Our first day together" },
    { icon: "✈️", text: "Adventures & travels" },
    { icon: "🎂", text: "Celebrating milestones" },
    { icon: "❤️", text: "Falling in love every day" },
  ];

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-yellow-100 via-pink-200 to-purple-200 overflow-hidden animate-gradient-x p-6">
      {/* Floating Balloons */}
      <div className="absolute w-6 h-12 bg-red-400 rounded-full left-10 bottom-0 animate-balloon float-animation delay-0"></div>
      <div className="absolute w-8 h-16 bg-blue-400 rounded-full left-1/3 bottom-0 animate-balloon float-animation delay-2000"></div>
      <div className="absolute w-5 h-10 bg-green-400 rounded-full left-2/3 bottom-0 animate-balloon float-animation delay-1000"></div>
      <div className="absolute w-7 h-14 bg-pink-500 rounded-full left-3/4 bottom-0 animate-balloon float-animation delay-3000"></div>

      <h2 className="text-4xl font-extrabold text-center text-purple-600 mb-10 z-10 relative">
        🎉 Our Celebration 🎉
      </h2>

      <div className="max-w-4xl mx-auto grid gap-6 md:grid-cols-2 z-10 relative">
        {moments.map((m, i) => (
          <div
            key={i}
            className="card-shadow flex items-center gap-4 hover:scale-105 transition bg-white/70 p-4 rounded-lg"
          >
            <span className="text-4xl">{m.icon}</span>
            <p className="text-lg font-medium text-gray-800">{m.text}</p>
          </div>
        ))}
      </div>

      {/* Instruction Text */}
      <p className="absolute bottom-4 text-white text-sm text-center w-full z-20">
        Home → top-left 🏠 | Gallery → top-right 📸 | Message → bottom-right 💌
      </p>
    </div>
  );
};

export default Celebration;
