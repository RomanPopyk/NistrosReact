import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import English from './pages/English';
import French from './pages/French';
import Italian from './pages/Italian';
import Slovak from './pages/Slovak';
import German from './pages/German';
import Spanish from './pages/Spanish';

import Navbar from './components/Navbar/Navbar';


export default function App() {
  return (
    <Router>
      {/* Components outside of <Routes> stay visible on every page (like a Navbar) */}
      <Navbar /> 
      
      <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/english" element={<English />} />
        <Route path="/french" element={<French />} />
        <Route path="/italian" element={<Italian />} />
        <Route path="/slovak" element={<Slovak />} />
        <Route path="/german" element={<German />} />
        <Route path="/spanish" element={<Spanish />} />
      </Routes>
    </Router>
  );
}