import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Exp from './routes/exp';
import Projects from './routes/projects';
import Contact from './routes/contact';
import About from './routes/about';

const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/experience" element={<Exp />} />
                <Route path="/projects" element={<Projects />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routing;