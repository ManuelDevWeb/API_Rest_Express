// Importando express
const express = require('express');

// Importando router de productos
const productsRouter = require('./products/products.router');
// Importando router de usuarios
const usersRouter = require('./users/users.router');
// Importando router de categorias
const categoriesRouter = require('./categories/categories.router');

function routerApi(app) {
    const router = express.Router();

    // Endpoint principal
    app.use('/api/v1', router);

    // Definimos endpoint para productos
    router.use('/products', productsRouter);
    // Definimos endpoint para usuarios
    router.use('/users', usersRouter);
    // Definimos endpoint para categorias
    router.use('/categories', categoriesRouter);
}

// Exportamos módulo
module.exports = routerApi;