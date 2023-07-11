import React from "react";
import styled, { createGlobalStyle, keyframes } from "styled-components";
import Header from "./Header";
import Bio from "./Bio";
import Footer from "./Footer";
import Projects from "./Projects";
import Contact from "./Contact";
import "./styles.css";

const glow = keyframes`
  0% {
    box-shadow: 0 0 5px #00ffff, 0 0 10px #00ffff, 0 0 15px #00ffff, 0 0 20px #00ffff;
  }
  100% {
    box-shadow: 0 0 10px #ff00ff, 0 0 20px #ff00ff, 0 0 30px #ff00ff, 0 0 40px #ff00ff;
  }
`;

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #000;
    color: #fff;
    font-family: 'Courier New', Courier, monospace;
  }

  a {
    color: #00ffff;
    text-decoration: none;
    animation: ${glow} 2s ease-in-out infinite alternate;
  }
`;

const AppContainer = styled.div`
  min-height: 100vh;
  height: 100%;
  background-image: linear-gradient(
    to right,
    #ff0080,
    #ff00ff,
    #8000ff,
    #0080ff
  );
  background-size: 200% 200%;
  animation: Gradient 15s ease infinite;

  @keyframes Gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Header />
        <Bio />
        <Projects />
        <Contact />
        <Footer />
      </AppContainer>
    </>
  );
};

export default App;
