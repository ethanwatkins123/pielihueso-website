// import global layout
import Layout from "./layouts/layout/Layout";
// import pages
import Home from "./pages/home/Home";
import Vinos from "./pages/vinos/Vinos";
import Equipo from "./pages/equipo/Equipo";
import NuestraHistoria from "./pages/nuestraHistoria/NuestraHistoria";
import LaFinca from "./pages/laFinca/LaFinca";
import DondeComprar from "./pages/dondeComprar/DondeComprar";
import Contacto from "./pages/contacto/Contacto";
import Faq from "./pages/faq/Faq";
// import router
import { Routes, Route, useLocation } from "react-router-dom";

import "./styles/styles.scss";

function App() {
  const location = useLocation();

  // to determine the background color based on location
  const getBackgroundColor = () => {
    switch (location.pathname) {
      case "/donde-comprar":
        return "var(--clr-green)";
      case "/contacto":
        return "var(--clr-yellow)";
      case "/faq":
        return "var(--clr-pink)";
      default:
        return "var(--clr-offwhite)";
    }
  };

  return (
    <div className="app" style={{ backgroundColor: getBackgroundColor() }}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/vinos" element={<Vinos />} />
        <Route path="/equipo" element={<Equipo />} />
        <Route path="/nuestra-historia" element={<NuestraHistoria />} />
        <Route path="/la-finca" element={<LaFinca />} />
        <Route path="/donde-comprar" element={<DondeComprar />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
    </div>
  );
}

export default App;
