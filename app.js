const dotenv = require('dotenv');
const express = require('express');
const app = express();

dotenv.config();

const registros = require('./consl/registros.js');
const bodyParser = require('body-parser')

app.use(bodyParser.json()) // for parsing application/json






app.use("/", registros);

// const port = process.env.PORT || 3000;
// app.listen(port, () => console.log(`escuchando en puerto ${port}...`));
