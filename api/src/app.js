const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const mainRouter = require("./routes");

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: [
      "https://e-comerse-back.onrender.com",
      "https://e-comerse-f.onrender.com",
      "http://localhost:3000",
    ],
    credentials: true,
  })
);
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(cookieParser());
app.use(morgan("dev"));

app.use(mainRouter);

module.exports = app;
