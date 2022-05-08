import Sidebar from "./components/Sidebar/Sidebar";
import Mobilebar from './components/Sidebar/mobilebar';

import './App.css';

const App = () => {
  const width = window.innerWidth;
  return (
    <>
      {width > '600' ? <Sidebar /> : <Mobilebar />}
      
    </>
  );
}

export default App;
