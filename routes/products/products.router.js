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
router.get('/', (req, res) => {
    // Obteniendo todos los productos ejecutando el método find
    const products = service.find();
    res.json(products);
})

router.get('/filter', (req, res) => {
    res.send('Yo soy un filter');
})

// GET: Obtener un producto
router.get('/:productId', (req, res) => {
    // Accediendo a los parámetros que vienen por URL
    const { productId } = req.params;

    // Obteniendo un producto ejecutando el método findOne
    const product = service.findOne(productId);

    res.json(product);

    // if (productId === '999') {
    //     res.status(404).json({
    //         message: 'Not found'
    //     })
    // } else {
    //     res.status(200).json({
    //         productId,
    //         name: 'Product 1',
    //         price: 1000
    //     })
    // }
})

// POST: Crear un producto
router.post('/', (req, res) => {
    // Accediendo a los datos que vienen por el body (Utilizar postman o insomnia)
    const body = req.body;

    // Creando un producto ejecutando el método create
    const newProduct = service.create(body);

    res.status(201).json(newProduct);
})

// PATHC: Actualizar un producto
router.patch('/:productId', (req, res) => {
    // Accediendo a los parámetros que vienen por URL
    const { productId } = req.params;

    // Accediendo a los datos que vienen por el body (Utilizar postman o insomnia)
    const body = req.body;

    // Actualizando un producto ejecutando el método update
    const updatedProduct = service.update(productId, body);

    res.json(updatedProduct);
})

// DELETE: Eliminar un producto
router.delete('/:productId', (req, res) => {
    // Accediendo a los parámetros que vienen por URL
    const { productId } = req.params;

    // Eliminando un producto ejecutando el método delete
    const deletedProducr = service.delete(productId);

    res.json(deletedProducr);
})

// Exportamos módulo
module.exports = router;