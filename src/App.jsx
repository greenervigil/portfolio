import Sidebar from "./components/Sidebar/Sidebar";
import Mobilebar from './components/Sidebar/mobilebar';

import './App.css';
import Home from "./components/home";
import About from "./components/about";
import Exp from "./components/exp";
import Projects from "./components/projects";
import Contact from "./components/contact";

const App = () => {
  const width = window.innerWidth;
  return (
    <>
      {width > '600' ? <Sidebar /> : <Mobilebar />}
      
      {width > '600' && <Home /> }
      <About />
      <Exp />
      <Projects />
      {/*<Contact />*/}
    </>
  );
}

export default App;
