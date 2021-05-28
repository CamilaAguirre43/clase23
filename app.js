const express = require('express');
const app = express(); // se refiere a la ejecucion de una funcion
const port = 3000;


app.listen(port, () => console.log('Servidor corriendo en el puerto ' + port)) // 3000 es el numero de puerto - con el .listen levantamos un servidor


