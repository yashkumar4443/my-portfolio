import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { darkTheme, lightTheme } from "./utils/Themes.js";
import Navbar from "./components/Navbar";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Education from "./components/Education";
import ProjectDetails from "./components/ProjectDetails";
import Blog, { BlogPost } from "./components/Blog";
import styled from "styled-components";

const Body = styled.div`
  background:
    radial-gradient(circle at 10% 8%, ${({ theme }) => theme.primarySoft}, transparent 28%),
    radial-gradient(circle at 92% 34%, ${({ theme }) => theme.accentSoft}, transparent 26%),
    ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  background:
    linear-gradient(140deg, ${({ theme }) => theme.primarySoft} 0%, transparent 38%),
    linear-gradient(32deg, transparent 52%, ${({ theme }) => theme.accentSoft} 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

function App() {
  const [darkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router>
        <Navbar />
        <Body>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HeroSection />
                  <Wrapper>
                    <Skills />
                    <Experience />
                  </Wrapper>
                  <Projects
                    openModal={openModal}
                    setOpenModal={setOpenModal}
                  />
                  <Wrapper>
                    <Education />
                    <Contact />
                  </Wrapper>
                  <Footer />
                  {openModal.state && (
                    <ProjectDetails
                      openModal={openModal}
                      setOpenModal={setOpenModal}
                    />
                  )}
                </>
              }
            />

            <Route path="/blog" element={<Blog />} />

            <Route path="/blog/:slug" element={<BlogPost />} />

          </Routes>
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
