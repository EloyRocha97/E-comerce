import React, { useState } from "react";
import {
  FormGroup,
  FormControlLabel,
  Checkbox,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import style from "./filtros.module.css";

const Filtros = () => {
  const [prendas, setPrenda] = useState("");

  const handleChange = (event) => {
    setPrenda(event.target.value);
  };

  return (
    <div className={style.filtrosWrapper}>
      <div className={style.filtPrenda}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Prendas</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={prendas}
            label="Prendas"
            onChange={handleChange}
          >
            <MenuItem value={20}>Buzo</MenuItem>
            <MenuItem value={30}>Campera</MenuItem>
            <MenuItem value={40}>Remera</MenuItem>
            <MenuItem value={50}>Camisa</MenuItem>
            <MenuItem value={60}>Pantalon</MenuItem>
            <MenuItem value={70}>Bermuda</MenuItem>
            <MenuItem value={80}>Todo</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className={style.filtGen}>
        {/* required - disabled - defaultChecked */}
        <FormGroup>
          Talle
          <FormControlLabel control={<Checkbox />} label="S" />
          <FormControlLabel control={<Checkbox />} label="M" />
          <FormControlLabel control={<Checkbox />} label="L" />
          <FormControlLabel control={<Checkbox />} label="XL" />
        </FormGroup>
      </div>
    </div>
  );
};

export default Filtros;
