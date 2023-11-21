const express = require('express')
require('dotenv').config()

//Crear Express App
const app = express();

//Base de Datos
dbConnection();

app.use(express.static('public'))

//Lectura y parseo del body
app.use( express.json() );

//Rutas
app.use('/api/auth', require('./routes/auth'))

//Escuchar en puerto 4000
app.listen(process.env.PORT, ()=>{
    console.log('Servidor corriendo en puerto', process.env.PORT)
})

