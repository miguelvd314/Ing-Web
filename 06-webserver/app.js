const express = require('express');
const hbs = require('hbs');
require('dotenv').config();
const app = express();
const port = process.env.PORT;

// Configuración de Handlebars como motor de vistas
app.set('view engine', 'hbs'); // Configuramos Handlebars como el motor de vistas
hbs.registerPartials(__dirname + '/views/partials'); // Registramos parciales para su uso

// Middleware para servir contenido estático desde la carpeta 'public'
app.use(express.static('public')); // Define el middleware para servir contenido estático desde la carpeta 'public'

// Definición de rutas
app.get('/', (req, res) => {
  res.render('home', {
    nombre: ' Miguel Villegas',
    titulo: 'Curso de Node'
  });
});

app.get('/elements', (req, res) => {
  res.render('elements', {
    nombre: ' Miguel Villegas',
    titulo: 'Curso de Node'
  });
});

app.get('/generic', (req, res) => {
  res.render('generic', {
    nombre: ' Miguel Villegas',
    titulo: 'Curso de Node'
  });
});

// Ruta para manejar todas las demás rutas no definidas
app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/404.html');
});

// Iniciar el servidor y escuchar en el puerto especificado
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
