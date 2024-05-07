import React, { useState, useEffect } from "react";

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
import { AnimatePresence } from "framer-motion";

import "./styles/styles.scss";

function App() {
  const location = useLocation();
  const [backgroundColor, setBackgroundColor] = useState("var(--clr-offwhite)");

  useEffect(() => {
    const timeout = setTimeout(() => {
      switch (location.pathname) {
        case "/donde-comprar":
          setBackgroundColor("var(--clr-green)");
          break;
        case "/contacto":
          setBackgroundColor("var(--clr-yellow)");
          break;
        case "/faq":
          setBackgroundColor("var(--clr-pink)");
          break;
        default:
          setBackgroundColor("var(--clr-offwhite)");
      }
    }, 750); // Adjust the delay time as needed

    return () => clearTimeout(timeout);
  }, [location.pathname]);

  return (
    <div className="app" style={{ backgroundColor }}>
      <AnimatePresence mode="wait">
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
      </AnimatePresence>
    </div>
  );
}

export default App;
