import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Company } from "./components/pages/company"
import { Contact } from "./components/pages/contact"
import { Home } from "./components/pages/home"
import { NewProject } from "./components/pages/newproject"
import { Projects } from "./components/pages/projects"

import { Container } from "./components/layout/container.js"
import { Navbar } from "./components/layout/navbar"
import { Footer } from "./components/layout/footer"


function App() {
  return (    
    <BrowserRouter>
      <Navbar />      
      <Container customClass="min-height">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/newproject" element={<NewProject />} />
          <Route path="/newproject/projects" element={<Projects />} />
          {/* <Route path="/newproject" element={<Project />} /> */}
          {/* <Route path="/project/:id" element={<Project />} /> */}
        </Routes>
      </Container>
      <Footer />
    </BrowserRouter>    
  );
};

export default App;
