// Importando express
const express = require('express');
// Importando servicio de productos
const ProductsService = require('../../services/products/products.service');

const router = express.Router();

// Instanciando el servicio de productos
const service = new ProductsService();

// Rutas para productos
/* LOS ENDPOINTS ESPECIFICOS DEBEN DECLARARSE ANTES DE LOS ENDPOINTS DINAMICOS!!! */

// GET: Obtener todos los productos
router.get('/', async(req, res) => {
    // Obteniendo todos los productos ejecutando el método find
    const products = await service.find();
    res.json(products);
});

router.get('/filter', (req, res) => {
    res.send('Yo soy un filter');
});

// GET: Obtener un producto
router.get('/:productId', async(req, res, next) => {
    try {
        // Accediendo a los parámetros que vienen por URL
        const { productId } = req.params;

        // Obteniendo un producto ejecutando el método findOne
        const product = await service.findOne(productId);

        res.json(product);
    } catch (error) {
        // Next permite ejecutar el siguiente middleware, en este caso los middleware tipo error que hayan
        next(error);
    }
});

// POST: Crear un producto
router.post('/', async(req, res) => {
    // Accediendo a los datos que vienen por el body (Utilizar postman o insomnia)
    const body = req.body;

    // Creando un producto ejecutando el método create
    const newProduct = await service.create(body);

    res.status(201).json(newProduct);
});

// PATHC: Actualizar un producto
router.patch('/:productId', async(req, res, next) => {
    try {
        // Accediendo a los parámetros que vienen por URL
        const { productId } = req.params;

        // Accediendo a los datos que vienen por el body (Utilizar postman o insomnia)
        const body = req.body;

        // Actualizando un producto ejecutando el método update
        const updatedProduct = await service.update(productId, body);

        res.json(updatedProduct);
    } catch (error) {
        // Next permite ejecutar el siguiente middleware, en este caso los middleware tipo error que hayan
        next(error);
    }
});

// DELETE: Eliminar un producto
router.delete('/:productId', async(req, res) => {
    // Accediendo a los parámetros que vienen por URL
    const { productId } = req.params;

    // Eliminando un producto ejecutando el método delete
    const deletedProducr = await service.delete(productId);

    res.json(deletedProducr);
});

// Exportamos módulo
module.exports = router;