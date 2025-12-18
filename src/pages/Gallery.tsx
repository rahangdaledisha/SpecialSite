import React, { useState } from "react";
import { Link } from "react-router-dom";

const Gallery = () => {
  const [photos, setPhotos] = useState<string[]>([]);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const files = Array.from(e.target.files);
    const urls = files.map((file) => URL.createObjectURL(file));
    setPhotos((prev) => [...prev, ...urls]);
  };

  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-200 animate-gradient-x">
      <h2 className="text-4xl font-bold text-center text-pink-600 mb-6">
        Our Beautiful Memories 💖
      </h2>

      <div className="flex justify-center mb-8">
        <label className="btn-gradient cursor-pointer">
          Upload Photos 📤
          <input
            type="file"
            accept="image/*"
            multiple
            className="hidden"
            onChange={handleUpload}
          />
        </label>
      </div>

      {photos.length === 0 ? (
        <p className="text-center text-gray-600">
          No photos yet. Upload your favorite memories 💕
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {photos.map((photo, i) => (
            <div key={i} className="card-shadow overflow-hidden hover:scale-105 transition">
              <img src={photo} alt="memory" className="w-full h-64 object-cover" />
            </div>
          ))}
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="flex justify-center mt-8 gap-4">
        <Link to="/" className="btn-gradient">
          Back Home 🏠
        </Link>
        <Link to="/celebration" className="btn-gradient">
          See Celebration 🎉
        </Link>
        <Link to="/message" className="btn-gradient">
          Read My Message 💌
        </Link>
      </div>
    </div>
  );
};

export default Gallery;
