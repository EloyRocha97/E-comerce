import React, { useEffect, useRef, useState } from "react";
import { data } from "./data";
import style from "./carrusel.module.css";

const Carrusel = () => {
  const listImg = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageWidth = 600;

  useEffect(() => {
    const newPosition = -currentIndex * imageWidth;
    listImg.current.style.transform = `translateX(${newPosition}px)`;
  }, [currentIndex, imageWidth]);

  const scrollToImage = (direction) => {
    const maxIndex = data.length - 1;

    if (direction === "prev") {
      setCurrentIndex((curr) => (curr === 0 ? maxIndex : curr - 1));
    } else {
      setCurrentIndex((curr) => (curr === maxIndex ? 0 : curr + 1));
    }
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className={style.mainContainer}>
      <div className={style.sliderContainer}>
        <div className={style.leftArrow} onClick={() => scrollToImage("prev")}>
          &#8249;
        </div>
        <div className={style.rightArrow} onClick={() => scrollToImage("next")}>
          &#8250;
        </div>
        <div className={style.containerImages}>
          <ul ref={listImg}>
            {data.map((image) => {
              return (
                <li key={image.id}>
                  <img src={image.imgUrl} width={800} height={350} />
                </li>
              );
            })}
          </ul>
        </div>
        <div className={style.dotsContainer}>
          {data.map((_, idx) => (
            <div
              key={idx}
              className={`dotContainerItem ${
                idx === currentIndex ? style.active : ""
              }`}
              onClick={() => goToSlide(idx)}
            >
              &#8277;
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carrusel;
