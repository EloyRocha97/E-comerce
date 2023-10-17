import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
import { createProduct } from "../../redux/actions";
import axios from "axios";

import style from "./form.module.css";

const From = () => {
  const tallas = [
    "S",
    "M",
    "L",
    "XL",
    "38",
    "40",
    "42",
    "44",
    " 37",
    " 38",
    " 39",
    " 40",
    " 41",
    " 42",
  ];

  const dispatch = useDispatch();

  const category = useSelector((state) => state.categorys);

  const [form, setForm] = useState({
    nombre: "",
    precio: "",
    descripcion: "",
    genero: "",
    talla: [],
    tipo: "",
    categoryName: "",
    imagen: "",
  });

  const [errors, setErrors] = useState({
    nombre: "",
    precio: "",
    descripcion: "",
    genero: "",
    talla: [],
    tipo: "",
    categoryName: "",
    imagen: "",
  });

  const validate = (form) => {
    if (/^[0-9]+$/.test(form.precio)) {
      setErrors({ ...errors, precio: "" });
    } else {
      setErrors({ ...errors, precio: "Solo numeros" });
    }
    if (form.precio === "") {
      setErrors({ ...errors, precio: "Esta vacio" });
    }
  };

  const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    validate({ ...form, [property]: value });
    setForm({ ...form, [property]: value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    let {
      nombre,
      precio,
      descripcion,
      genero,
      talla,
      tipo,
      categoryName,
      imagen,
    } = form;

    dispatch(
      createProduct({
        nombre,
        precio,
        descripcion,
        genero,
        talla,
        tipo,
        categoryName,
        imagen,
      })
    );
    alert("Creado!");

    setForm({
      nombre: "",
      precio: "",
      descripcion: "",
      genero: "",
      talla: [],
      tipo: "",
      categoryName: "",
      imagen: "",
    });

    // <Link to="/home">Volver al Inicio</Link>;
  };

  const handleSelect = (e) => {
    setForm({
      ...form,
      talla: [...form.talla, e.target.value],
    });
  };

  function handleDelete(el) {
    setForm({
      ...form,
      talla: form.talla.filter((t) => t !== el),
    });
  }

  return (
    <form onSubmit={submitHandler} className={style.container}>
      <div>
        <label>Nombre</label>
        <input
          type="text"
          value={form.nombre}
          onChange={changeHandler}
          name="nombre"
        />
        {errors.nombre && <span>{errors.nombre}</span>}
      </div>

      <div>
        <label>Precio</label>
        <input
          type="text"
          value={form.precio}
          onChange={changeHandler}
          name="precio"
        />
        {errors.precio && <span>{errors.precio}</span>}
      </div>

      <div>
        <label>Descripcion</label>
        <input
          type="text"
          value={form.descripcion}
          onChange={changeHandler}
          name="descripcion"
        />
      </div>

      <div>
        <label>Tipo</label>
        <input
          type="text"
          value={form.tipo}
          onChange={changeHandler}
          name="tipo"
        />
        {/* {errors.tipo && <span>{errors.tipo}</span>} */}
      </div>

      <div className={style.inputCont}>
        <h4 className={style.label}>Imagen:</h4>
        <input
          className={style.input}
          placeholder="URL imagen"
          type="text"
          name="imagen"
          required
          onChange={changeHandler}
          value={form.imagen}
        />

        {/* {errors.imagen && <span>{errors.imagen}</span>} */}
      </div>

      <div>
        <label>Categoria</label>
        <input
          type="text"
          value={form.categoryName}
          onChange={changeHandler}
          name="categoryName"
        />
        {/* {errors.categoryName && <span>{errors.categoryName}</span>} */}
      </div>

      <div>
        <label>Genero</label>
        <input
          type="text"
          value={form.genero}
          onChange={changeHandler}
          name="genero"
        />
        {/* {errors.genero && <span>{errors.genero}</span>} */}
      </div>

      <div className={style.inputContDogs}>
        <h4 className={style.label}>Talla:</h4>
        <select
          onChange={handleSelect}
          className={style.input}
          required
          placeholder="Seleccionar talla"
          name="talla"
        >
          <option value="">talla</option>
          {tallas.map((t, i) => {
            return (
              <option key={i} value={t.id}>
                {t}
              </option>
            );
          })}
        </select>
      </div>

      <div className={style.sidebar_box}>
        {form.talla.map((el, i) => (
          <div key={i} className={style.selectedItems}>
            <p>{el}</p>
            <button className={style.x} onClick={() => handleDelete(el)}>
              x
            </button>
          </div>
        ))}
      </div>
      <br></br>
      <button type="submit">CREAR</button>
    </form>
  );
};

export default From;
