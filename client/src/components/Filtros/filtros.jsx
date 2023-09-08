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
            <MenuItem value="Pantalon">Pantalon</MenuItem>
            <MenuItem value="Bermuda">Bermuda</MenuItem>
            <MenuItem value="Zapatilla">Zapatilla</MenuItem>
            <MenuItem value="Todo">Todo</MenuItem>
          </Select>
        </FormControl>
      </div>

      {/* FILTRAR POR Talla */}
      <div>
        <FormControl onChange={(e) => handleFilterTalla(e)}>
          <FormLabel id="demo-radio-buttons-group-label">Talles</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            <FormControlLabel value="Todos" control={<Radio />} label="Todos" />
            <FormLabel id="demo-radio-buttons-group-label">
              Talla Pantalon
            </FormLabel>
            <FormControlLabel value="S" control={<Radio />} label="S" />
            <FormControlLabel value="M" control={<Radio />} label="M" />
            <FormControlLabel value="L" control={<Radio />} label="L" />
            <FormControlLabel value="XL" control={<Radio />} label="XL" />

            <FormLabel id="demo-radio-buttons-group-label">
              Talla Pantalon
            </FormLabel>
            <FormControlLabel value="38" control={<Radio />} label="38" />
            <FormControlLabel value="40" control={<Radio />} label="40" />
            <FormControlLabel value="42" control={<Radio />} label="42" />
            <FormControlLabel value="44" control={<Radio />} label="44" />

            <FormLabel id="demo-radio-buttons-group-label">
              Talla Zapatillas
            </FormLabel>
            <FormControlLabel value=" 37" control={<Radio />} label="37" />
            <FormControlLabel value=" 38" control={<Radio />} label="38" />
            <FormControlLabel value=" 39" control={<Radio />} label="39" />
            <FormControlLabel value=" 40" control={<Radio />} label="40" />
            <FormControlLabel value=" 41" control={<Radio />} label="41" />
            <FormControlLabel value=" 42" control={<Radio />} label="42" />
            {/* <FormLabel id="demo-radio-buttons-group-label">
              Talles
            </FormLabel>
            <FormControlLabel value="todos" control={<Radio />} label="Todos" /> */}
          </RadioGroup>
        </FormControl>
      </div>
    </div>
  );
};

export default Filtros;
