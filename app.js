const express = require('express');
const app = express(); // se refiere a la ejecucion de una funcion
const port = 3000;

// req --->>> request (peticion)
// res -->>> response (respuesta)

app.get('/', (req,res)=> res.send('Mi primera pagina, ahora que hago?')) //root (ruta raiz) localhost:3000

app.get('/contactos',(req,res)=> res.send('Pagina de contacto'));

app.get('/productos', (req,res)=> res.send('Pagina de productos'));

app.listen(port, () => console.log('Servidor corriendo en el puerto ' + port)) // 3000 es el numero de puerto - con el .listen levantamos un servidor / va un callback en forma de arrow function tambien




