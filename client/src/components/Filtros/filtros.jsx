import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Radio } from "@material-ui/core";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import {
  filterByGenero,
  filterByRopa,
  filterByTalla,
  resetFilters,
} from "../../redux/actions";
import style from "./filtros.module.css";

const Filtros = () => {
  const dispatch = useDispatch();
  const genero1 = useSelector((state) => state.genero);
  const ropa1 = useSelector((state) => state.ropa);
  const talla1 = useSelector((state) => state.talla);

  const [genero, setGenero] = useState(localStorage.getItem("genero") || "");
  const [ropa, setRopa] = useState(localStorage.getItem("ropa") || "");
  const [talla, setTalla] = useState(localStorage.getItem("talla") || "");

  const handleResetFilters = () => {
    localStorage.removeItem("genero");
    localStorage.removeItem("ropa");
    localStorage.removeItem("talla");
    dispatch(resetFilters());
    setGenero("");
    setRopa("");
    setTalla("");
  };

  const handleGeneroChange = (event) => {
    const selectedGenero = event.target.value;
    setGenero(selectedGenero);
    setRopa("");
    setTalla("");
    dispatch(filterByGenero(selectedGenero));
  };

  const handleRopaChange = (event) => {
    const selectedRopa = event.target.value;
    setRopa(selectedRopa);
    localStorage.setItem("ropa", selectedRopa);
    dispatch(filterByRopa(selectedRopa));
  };

  const handleTallaChange = (event) => {
    const selectedTalla = event.target.value;
    setTalla(selectedTalla);
    localStorage.setItem("talla", selectedTalla);
    dispatch(filterByTalla(selectedTalla));
  };

  return (
    <div className={style.filtrosWrapper}>
      <div className={style.reset}>
        <button onClick={handleResetFilters}>Restablecer Filtros</button>
      </div>
      {/* FILTRAR POR GENERO */}

      <div className={style.filtPrenda}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label1">Genero</InputLabel>
          <Select
            labelId="demo-simple-select-label1"
            id="demo-simple-select1"
            value={genero}
            label="Genero"
            onChange={(e) => handleGeneroChange(e)}
          >
            <MenuItem value="Hombre">Hombre</MenuItem>
            <MenuItem value="Mujer">Mujer</MenuItem>
            <MenuItem value="Ambos">Ambos</MenuItem>
          </Select>
        </FormControl>
      </div>

      {/* FILTRAR POR PRENDA */}
      <div className={style.filtPrenda}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Prendas</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={ropa}
            label="Prendas"
            onChange={(e) => handleRopaChange(e)}
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
        <FormControl onChange={(e) => handleTallaChange(e)}>
          <FormLabel id="demo-radio-buttons-group-label">Talles</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            value={talla}
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
          </RadioGroup>
        </FormControl>
      </div>
    </div>
  );
};

export default Filtros;
