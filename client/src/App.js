import React, { useEffect } from "react";
import Navbar from "./components/NavBar/navbar";
import { Home, Detail, Landing, Contacto, Form } from "./views";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import "./app.css";
axios.defaults.baseURL = "https://e-comerse-f.onrender.com";

// Componente contenedor para las páginas que necesitan el Navbar
const PageWithNavbar = ({ element: PageComponent }) => (
  <div>
    <Navbar />
    <PageComponent />
  </div>
);

function App() {
  useEffect(() => {
    const handleBeforeUnload = (event) => {
      // Desplázate hacia la parte superior de la página antes de recargar
      window.scrollTo(0, 0);
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      // Elimina el evento antes de que el componente se desmonte
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PageWithNavbar element={Landing} />} />
        <Route
          path="/contacto"
          element={<PageWithNavbar element={Contacto} />}
        />
        <Route
          path="/product/create"
          element={<PageWithNavbar element={Form} />}
        />
        <Route path="/home" element={<PageWithNavbar element={Home} />} />
        <Route
          path="/product/:id"
          element={<PageWithNavbar element={Detail} />}
        />
      </Routes>
    </div>
  );
}

export default App;
