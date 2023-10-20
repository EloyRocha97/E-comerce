import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getNameProduct } from "../../redux/actions";
import styles from "./search.module.css";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { Box, Divider, InputBase, Paper } from "@mui/material";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [nombre, setNombre] = useState("");
  const [input, setInput] = useState(nombre);

  function handleInputChange(event) {
    setInput(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(getNameProduct(input));
    setInput("");
  }

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSubmit(event);
    }
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center", // Centrar horizontalmente
        paddingRight: "10px",
      }}
    >
      <Paper
        component="form"
        sx={{
          background: "transparent",
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: "700px",
          height: "30px",
          border: "solid 1px #EC0054",
          borderRadius: "25px",
          paddingRight: "10px",
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1, color: "#EC0054", width: "100%" }}
          variant="standard"
          placeholder="Search:"
          color="primary"
          inputProps={{ "aria-label": "search a product" }}
          onChange={handleInputChange}
          value={input}
        />
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <IconButton
          component="button"
          type="submit"
          sx={{ p: "10px", color: "#EC0054" }}
          aria-label="search"
          onClick={handleSubmit}
          onKeyPress={handleKeyPress}
        >
          <SearchIcon />
        </IconButton>
      </Paper>
    </Box>
  );
}
