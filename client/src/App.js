import React from "react";
import Navbar from "./components/NavBar/navbar";
import { Home, Detail } from "./views";
import { Routes, Route } from "react-router-dom";
import "./app.css";

// Componente contenedor para las páginas que necesitan el Navbar
const PageWithNavbar = ({ element: PageComponent }) => (
  <div>
    <Navbar />
    <PageComponent />
  </div>
);

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PageWithNavbar element={Home} />} />
        <Route path="/detail" element={<PageWithNavbar element={Detail} />} />
      </Routes>
    </div>
  );
}

export default App;
