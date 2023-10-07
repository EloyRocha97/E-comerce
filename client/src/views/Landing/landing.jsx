import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Carrusel from "../../components/Carrusel/Carru";
import { arma1, arma2, gym1, gym2, moda1, moda2 } from "./imgLanding";

import style from "./landing.module.css";

const Landing = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const images = [arma1, arma2, gym1, gym2, moda1, moda2];
    let loadedCount = 0;

    const checkAllImagesLoaded = () => {
      if (loadedCount === images.length) {
        setImagesLoaded(true);
      }
    };

    images.forEach((image) => {
      const img = new Image();
      img.src = image;
      img.onload = () => {
        loadedCount++;
        checkAllImagesLoaded();
      };
      img.onerror = () => {
        loadedCount++;
        checkAllImagesLoaded();
      };
    });

    return () => {
      // Cleanup code if needed
    };
  }, []); // Empty dependency array ensures this effect runs once after initial render

  if (!imagesLoaded) {
    // Mientras se cargan las imágenes, muestra un fondo blanco
    return <div className={style.loadingContainer}></div>;
  }

  // Cuando todas las imágenes están cargadas, muestra el contenido de la landing page
  return (
    <div className={style.container}>
      <Carrusel />
      <div className={style.block}>
        <img src={arma1} className={style.imgarma} alt="Arma 1" />
        <img src={arma2} className={style.imgarma} alt="Arma 2" />
      </div>
      <div className={style.block}>
        <img src={gym1} className={style.imggym} alt="Gym 1" />
        <img src={gym2} className={style.imggym} alt="Gym 2" />
      </div>
      <div className={style.block}>
        <img src={moda1} className={style.imgmoda} alt="Moda 1" />
        <img src={moda2} className={style.imgmoda} alt="Moda 2" />
      </div>
    </div>
  );
};

export default Landing;
