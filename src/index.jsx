import React from 'react';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Exp from './routes/exp';
import Projects from './routes/projects';
import Contact from './routes/contact';
import About from './routes/about';
import Home from './routes/home';
import Layout from './components/Layout/layout';
import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} /><Route path="/experience" element={<Exp />} />
          <Route path="/projects" element={<Projects />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Route>
      </Routes>
        </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
