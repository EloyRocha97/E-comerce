import style from "./card.module.css";

const Card = (props) => {
  return (
    <div className={style.card}>
      <p>Nombre:{props.nombre}</p>
      <p>imagen:{props.imagen}</p>
      <p>descripcion:{props.descripcion}</p>
      <p>precio:{props.precio}</p>
      <p>tipo:{props.tipo}</p>
    </div>
  );
};

export default Card;
