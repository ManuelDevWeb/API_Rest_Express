// Importando express
const express = require('express');
// Importando modulo de rutas
const routes = require('./routes/index.js');
// Importando middleware de errores
const {
    logErrors,
    errorHandler,
    boomErrorHandler,
} = require('./middlewares/error.handler.js');

// Creando una instancia de express
const app = express();

// Permite recibir información en formato json
app.use(express.json());

// Puerto
const port = 3000;
// IP local, para probar en dispositivos de tu misma red
const IP = '192.168.1.93';

// Rutas
routes(app);

// Los middlewares de tipo errores se deben hacer despues de definir el routing
// Si alguno de estos middlewares no tiene next, no se ejecuta el siguiente
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

// Puerto en el que se va a escuchar el servidor
app.listen(port, () => {
    // console.log(`Server running on port: ${port}`);
    console.log(`http://${IP}:${port}/`);
});