import React from "react";
import Telefono from "./svg/telIcon.svg";
import Direccion from "./svg/direcIcon.svg";
import Mail from "./svg/mail.svg";
import Ig from "./svg/ig.svg";
import Face from "./svg/face.svg";
import Twitter from "./svg/twitter.svg";
import style from "./contacto.module.css";

const Contacto = () => {
  return (
    <div className={style.container}>
      <div className={style.contacto}>
        <h1>Contactanos</h1>
      </div>
      <div className={style.todo}>
        <div className={style.fakes}>
          <div className={style.medios}>
            <h3>Hablanos por:</h3>
            <div className={style.info}>
              <img src={Telefono} alt="Mi tel" className={style.icons} />
              <h4> 151654654</h4>
            </div>

            <div className={style.info}>
              <img src={Mail} alt="Mi mail" className={style.icons} />
              <h4> mailFake@gmail.com</h4>
            </div>

            <div className={style.info}>
              <img src={Direccion} alt="Mi dire" className={style.icons} />
              <h4> B°Fake Barrio - Fake 654 - Fake Capital</h4>
            </div>
          </div>
          <iframe
            className={style.map}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.1525108580076!2d-64.19770392522933!3d-31.409923895937386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432987e02816255%3A0xa0c1cdfad69163b7!2zTWNEb25hbGQncyDigKIgUGxhemEgQ29sw7Nu!5e0!3m2!1ses-419!2sar!4v1694731416217!5m2!1ses-419!2sar"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className={style.redes}>
        <div>
          <h4>Tambien puedes seguirnos en:</h4>
        </div>
        <div className={style.redesIcon}>
          <img src={Ig} alt="Mi ig" className={style.redesIconTam} />

          <img src={Face} alt="Mi face" className={style.redesIconTam} />

          <img src={Twitter} alt="Mi twitter" className={style.redesIconTam} />
        </div>
      </div>
    </div>
  );
};

export default Contacto;
