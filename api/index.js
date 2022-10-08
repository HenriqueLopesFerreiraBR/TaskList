const express = require('express');
const router = require('./src/router');

require('dotenv').config();
const app = express();

//variaveis
const port = process.env.PORT;

app.use(express.json())
app.use(router);

app.listen(port,()=>{
    console.log(`Servidor rodando na porta: ${port}`)
});