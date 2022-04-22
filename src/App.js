import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import 'animate.css';
import Home from './pages/home';
import Projects from './pages/projects';

const App = () => {
  return (
    <>
      <Sidebar />
      <Projects />
    </>
  );
}

export default App;
