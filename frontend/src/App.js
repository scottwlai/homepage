import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import NoMatch from "./pages/NoMatch";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/*" element={<NoMatch />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
