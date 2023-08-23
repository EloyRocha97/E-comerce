import React from "react";
import Navbar from "./components/NavBar/navbar";
import { Home, Form, Detail } from "./views";
import { Routes, Route } from "react-router-dom";

// Componente contenedor para las páginas que necesitan el Navbar
const PageWithNavbar = ({ element: PageComponent }) => (
  <div>
    <Navbar />
    <PageComponent />
  </div>
);

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<PageWithNavbar element={Home} />} />
        <Route path="/form" element={<Form />} />
        <Route path="/detail" element={<PageWithNavbar element={Detail} />} />
      </Routes>
    </div>
  );
}

export default App;
