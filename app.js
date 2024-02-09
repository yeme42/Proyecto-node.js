import {pg} from 'pg'

const dotenv = require('dotenv');
const express = require('express');
const app = express();

const pool = new pg.Pool({
    connectionString: process.env.DATA_URL
})

dotenv.config();

const registros = require('./consl/registros.js');
const bodyParser = require('body-parser')

app.use(bodyParser.json()) // for parsing application/json




app.get('/ping'), async (req,res)=>{
    const result = await pool.query('SELECT NOW()')
    return res.JSON(result.rows[0])
}

app.use("/datos ", registros);

// const port = process.env.PORT || 3000;
// app.listen(port, () => console.log(`escuchando en puerto ${port}...`));
