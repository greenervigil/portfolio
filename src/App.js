import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/"  element={<Layout />}/>
      </Routes>
    </>
  );
}

export default App;
