const express = require("express");
const app = express();
const cors = require("cors");
const { router } = require("./routes/index.js");

// Configuración con problema de CORS
const corsOptions = {
  origin: "*",
  credentials: true, // access-control-allow-credentials: true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions)); 
app.use(express.json());
app.use("/", router);

module.exports = app;