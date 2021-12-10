import React, { FC } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import "./App.css";
import Navigation from "./components/Navigation";
import About from "./pages/About";
import Home from "./pages/Home";

const App: FC = () => {
  return (
    <section className="container">
      <BrowserRouter>
        <Navigation />

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />

          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </BrowserRouter>
    </section>
  );
};

export default App;
