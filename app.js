const dotenv = require('dotenv');
const cors = require('cors')
const express = require('express');
const app = express();

dotenv.config();

const registros = require('./consl/registros.js');
const bodyParser = require('body-parser')

// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin');
//     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//     next();
//   });
app.use(cors())
    


app.use(bodyParser.json()) // for parsing application/json






app.use("/datos", registros);

const port = process.env.port || 3000;
app.listen(port, () => console.log(`escuchando en puerto ${port}...`));
