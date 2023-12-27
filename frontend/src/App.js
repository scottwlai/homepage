import React, {
  useState
} from "react";
import {
  BrowserRouter as Router, Route, Routes
} from "react-router-dom";
import Home from "./components/home/Home";
import Portfolio from "./components/portfolio/Portfolio";
import Courses from "./components/courses/Courses";
import Hobbies from "./components/Hobbies";
import NoMatch from "./components/NoMatch";
import {
  CssBaseline,
  ThemeProvider
} from "@mui/material";
import {
  lightTheme,
  darkTheme
} from "./components/common/themeUtils";
import Header from "./components/header/Header.js";
import Footer from "./components/footer/Footer.js";
import Skills from "./components/skills/Skills.js";
import Projects from "./components/projects/Projects.js";
import Certifications from "./components/certifications/Certifications.js";

const App = () => {
  const [ darkMode, setDarkMode ] = useState(false);

  const handleThemeToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Router>
        <Header handleThemeToggle={handleThemeToggle} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/courses" element={<Courses />} />
          <Route path="/portfolio/skills" element={<Skills />} />
          <Route path="/portfolio/projects" element={<Projects />} />
          <Route path="/portfolio/certifications" element={<Certifications />} />
          <Route path="/hobbies" element={<Hobbies />} />
          <Route path="/*" element={<NoMatch />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
