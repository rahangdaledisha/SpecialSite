import React from "react";
import { Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Gallery from "./pages/Gallery";
import Celebration from "./pages/Celebration";
import Message from "./pages/Message";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/celebration" element={<Celebration />} />
      <Route path="/message" element={<Message />} />
    </Routes>
  );
};

export default App;
