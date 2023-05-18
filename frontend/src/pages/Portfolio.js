import React from "react";
import Layout from "../components/Layout";

import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Certifications from "../components/Certifications";
import Honors from "../components/Honors";
import Skills from "../components/Skills";
import Education from "../components/Education";

const Portfolio = () => {
  return (
    <Layout title="Portfolio">
      <Education />
      <Skills />
      <Projects />
      <Certifications />
      <Experience />
      <Honors />
    </Layout>
  );
}

export default Portfolio;
