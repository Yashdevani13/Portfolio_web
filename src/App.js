
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './componets/Navbar';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Portfolio from './pages/Portfolio/Portfolio';
import Themes from './componets/Themes';

function App() {
  return (
    <>
      <Navbar />
      <Themes />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
