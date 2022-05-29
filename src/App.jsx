import Sidebar from "./components/Sidebar/Sidebar";
import Mobilebar from './components/Sidebar/mobilebar';
import styled from "@emotion/styled";

import './App.css';
import Home from "./components/home";
import About from "./components/about";
import Exp from "./components/exp";
import Projects from "./components/projects";
import Contact from "./components/contact";

const H1 = styled.h1`
    font-family: 'Ubuntu';
    font-size: 3rem;
    color: #000;
    text-shadow: -1px 0 #18cae6, 0 3px #18cae6, 3px 0 #18cae6, 0 -1px #18cae6;
    text-align: center;
    margin: 100px 0;
`;

const App = () => {
  const width = window.innerWidth;
  return (
    <>
      {width > '600' ? <Sidebar /> : <Mobilebar />}
      
      {width > '600' && <Home /> }
      <About />
      <H1>Experience</H1>
      <Exp />
      <H1>Projects</H1>
      <Projects />
      <H1>Contact</H1>
      <Contact />
    </>
  );
}

export default App;
