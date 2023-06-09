import React from "react";
import {
  Routes, Route
} from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Courses from "./pages/Courses";
import Interests from "./pages/Interests";
import Demo from "./pages/Demo";
import NoMatch from "./pages/NoMatch";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/portfolio/courses" element={<Courses />} />
      <Route path="/interests" element={<Interests />} />
      <Route path="/demo" element={<Demo />} />
      <Route path="/*" element={<NoMatch />} />
    </Routes>
  );
}

export default App;
