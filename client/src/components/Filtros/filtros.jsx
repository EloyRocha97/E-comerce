import React, { useState } from "react";
import {
  Box,
  FormGroup,
  FormControlLabel,
  Checkbox,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormLabel,
  RadioGroup,
  Radio,
} from "@material-ui/core";
import { grey, pink } from "@material-ui/core/colors";
import {
  filterByGenero,
  filterByTalla,
  filterByRopa,
  filterByCategoria,
} from "../../redux/actions";
import { useDispatch } from "react-redux";
import style from "./filtros.module.css";

const Filtros = () => {
  const [prendas, setPrenda] = useState("");
  const dispatch = useDispatch();

  const [categoria, setCategoria] = useState("");
  const [genero, setGenero] = useState("");
  const [ropa, setRopa] = useState("");
  const [talla, setTalla] = useState("");

  const handleChange = (event) => {
    setPrenda(event.target.value);
  };

  function handleFilterCategoria(e) {
    dispatch(filterByCategoria(e.target.value));
  }
  function handleFilterGenero(e) {
    dispatch(filterByGenero(e.target.value));
  }

  function handleFilterRopa(e) {
    dispatch(filterByRopa(e.target.value));
  }

  function handleFilterTalla(e) {
    dispatch(filterByTalla(e.target.value));
  }

  return (
    <div className={style.filtrosWrapper}>
      {/* FILTRAR POR CATEGORIA */}
      <div>
        <FormControl onChange={(e) => handleFilterCategoria(e)}>
          <FormLabel id="demo-radio-buttons-group-label">Categoria</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            <FormControlLabel value="Ropa" control={<Radio />} label="Ropa" />
            <FormControlLabel
              value="Zapatillas"
              control={<Radio />}
              label="Zapatillas"
            />
            <FormControlLabel
              value="Accesorios"
              control={<Radio />}
              label="Accesorios"
            />
          </RadioGroup>
        </FormControl>
      </div>

      {/* FILTRAR POR GENERO */}
      <div>
        <FormControl onChange={(e) => handleFilterGenero(e)}>
          <FormLabel id="demo-row-radio-buttons-group-labell">Genero</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-labell"
            name="row-radio-buttons-groupp"
          >
            <FormControlLabel
              value="Hombre"
              control={<Radio />}
              label="Hombre"
            />
            <FormControlLabel value="Mujer" control={<Radio />} label="Mujer" />
            <FormControlLabel value="Ambos" control={<Radio />} label="Ambos" />
          </RadioGroup>
        </FormControl>
      </div>

      {/* FILTRAR POR PRENDA */}
      <div className={style.filtPrenda}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Prendas</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={prendas}
            label="Prendas"
            onChange={(e) => handleFilterRopa(e)}
          >
            <MenuItem value="Buzo">Buzo</MenuItem>
            <MenuItem value="Campera">Campera</MenuItem>
            <MenuItem value="Remera">Remera</MenuItem>
            <MenuItem value="Camisa">Camisa</MenuItem>
            <MenuItem value="Pantalon">Pantalon</MenuItem>
            <MenuItem value="Bermuda">Bermuda</MenuItem>
            <MenuItem value="Zapatilla">Zapatilla</MenuItem>
            <MenuItem value="Todo">Todo</MenuItem>
          </Select>
        </FormControl>
      </div>

      {/* FILTRAR POR TALLA */}

      <div className={style.filtGen}>
        {/* required - disabled - defaultChecked */}
        <FormGroup
          onChange={(e) => handleFilterTalla(e)}
          className={style.colorTalle}
        >
          Talles remeras
          <FormControlLabel control={<Checkbox value="S" />} label="S" />
          <FormControlLabel control={<Checkbox value="M" />} label="M" />
          <FormControlLabel control={<Checkbox value="L" />} label="L" />
          <FormControlLabel control={<Checkbox value="XL" />} label="XL" />
          Talles pantalon
          <FormControlLabel control={<Checkbox value="38" />} label="38" />
          <FormControlLabel control={<Checkbox value="40" />} label="40" />
          <FormControlLabel control={<Checkbox value="42" />} label="42" />
          <FormControlLabel control={<Checkbox value="44" />} label="44" />
          Talle zapatillas
          <FormControlLabel control={<Checkbox value="39" />} label="39" />
          <FormControlLabel control={<Checkbox value="40" />} label="40" />
          <FormControlLabel control={<Checkbox value="41" />} label="41" />
          <FormControlLabel control={<Checkbox value="42" />} label="42" />
        </FormGroup>
      </div>
    </div>
  );
};

export default Filtros;
