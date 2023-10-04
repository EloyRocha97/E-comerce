import React, { useState, useEffect } from "react";
import "./carrusel.css";

const images = [
  "https://media.istockphoto.com/id/941377004/es/foto/cliente-mujer-morena-selecci%C3%B3n-de-prendas-b%C3%A1sicas-en-la-tienda.jpg?s=612x612&w=0&k=20&c=CqqQbDHw2Ygu2wiQez8TfBIb5G1xnr20qlzMSFowSx0=",
  "https://as01.epimg.net/deporteyvida/imagenes/2019/11/03/portada/1572798603_458091_1572798763_noticia_normal_recorte1.jpg",
  "https://media.istockphoto.com/id/1143300560/es/foto/la-gente-joven-comprando-ropa.jpg?s=612x612&w=0&k=20&c=ZnFr4T0RKBdJK_T-GKNGm1A54GbXjQo3LjmTmtS-PUQ=",
];
const Carrusel = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextSlide = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // Cambiar automáticamente la imagen cada 3 segundos (3000 milisegundos)
  useEffect(() => {
    const interval = setInterval(nextSlide, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider-container">
      <img
        className="slider-image"
        src={images[currentImage]}
        alt={`Slide ${currentImage}`}
      />
    </div>
  );
};

export default Carrusel;
