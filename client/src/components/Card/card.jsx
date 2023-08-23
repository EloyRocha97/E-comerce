import style from "./card.module.css";

const Card = (props) => {
  return (
    <div className={style.card}>
      <div className={style.tamañoimg}>
        <img src={props.imagen} />
      </div>
      <div className={style.precio}>
        <p>${props.precio}</p>
      </div>
      <h3> {props.nombre}</h3>
    </div>
  );
};

export default Card;
