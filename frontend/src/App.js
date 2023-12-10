import React from "react";
import {
  Routes, Route
} from "react-router-dom";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Courses from "./components/Courses";
import Interests from "./components/Interests";
import Demo from "./components/Demo";
import NoMatch from "./components/NoMatch";

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
