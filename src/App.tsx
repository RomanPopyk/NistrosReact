import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import English from "./pages/English";
import French from "./pages/French";
import Italian from "./pages/Italian";
import Slovak from "./pages/Slovak";
import German from "./pages/German";
import Spanish from "./pages/Spanish";
import Ukrainian from "./pages/Ukrainian";

import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";

export default function App() {
  return (
    <Router>
      {/* Components outside of <Routes> stay visible on every page (like a Navbar) */}
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/english" element={<English />} />
        <Route path="/french" element={<French />} />
        <Route path="/spanish" element={<Spanish />} />
        <Route path="/italian" element={<Italian />} />
        <Route path="/german" element={<German />} />
        <Route path="/slovak" element={<Slovak />} />
        <Route path="/ukrainian" element={<Ukrainian />} />
      </Routes>

      <Footer />
    </Router>
  );
}
