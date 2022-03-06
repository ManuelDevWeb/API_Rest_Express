// Importando express
const express = require('express');
// Importando modulo de rutas
const routes = require('./routes/index.js');

// Creando una instancia de express
const app = express();

// Permite recibir información en formato json
app.use(express.json());

// Puerto
const port = 3000;
// IP local, para probar en dispositivos de tu misma red
const IP = "192.168.1.93";

// Rutas
routes(app);

// Puerto en el que se va a escuchar el servidor
app.listen(port, () => {
    // console.log(`Server running on port: ${port}`);
    console.log(`http://${IP}:${port}/`);
});