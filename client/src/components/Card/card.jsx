import style from "./card.module.css";

const Card = (props) => {
  return (
    <div className={style.card}>
      <h3> {props.nombre}</h3>
      <div className={style.tamañoimg}>
        <img src={props.imagen} />
      </div>
      {/* <p>descripcion:{props.descripcion}</p> */}
      <p>${props.precio}</p>
      {/* <p>tipo:{props.tipo}</p> */}
    </div>
  );
};

export default Card;
