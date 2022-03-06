// Importando express
const express = require('express');
// Importando faker (Permite generar data fake)
const faker = require('faker');

const router = express.Router();

// Rutas para productos
/* LOS ENDPOINTS ESPECIFICOS DEBEN DECLARARSE ANTES DE LOS ENDPOINTS DINAMICOS!!! */

// GET: Obtener todos los productos
router.get('/', (req, res) => {
    const products = [];
    // Accediendo a los querys que vienen por URL
    const { size } = req.query;
    const limit = size || 10;

    // Recorremos el array para agregar tantos productos queramos con faker
    for (let i = 0; i < limit; i++) {
        products.push({
            // Generando datos con fake
            name: faker.commerce.productName(),
            price: parseInt(faker.commerce.price(), 10),
            image: faker.image.imageUrl()
        })
    }

    res.json(products);
})

router.get('/filter', (req, res) => {
    res.send('Yo soy un filter');
})

// GET: Obtener un producto
router.get('/:productId', (req, res) => {
    // Accediendo a los parámetros que vienen por URL
    const { productId } = req.params;

    if (productId === '999') {
        res.status(404).json({
            message: 'Not found'
        })
    } else {
        res.status(200).json({
            productId,
            name: 'Product 1',
            price: 1000
        })
    }
})

// POST: Crear un producto
router.post('/', (req, res) => {
    // Accediendo a los datos que vienen por el body (Utilizar postman o insomnia)
    const body = req.body;

    res.status(201).json({
        message: 'Product created',
        data: body
    })
})

// PATHC: Actualizar un producto
router.patch('/:productId', (req, res) => {
    // Accediendo a los parámetros que vienen por URL
    const { productId } = req.params;

    // Accediendo a los datos que vienen por el body (Utilizar postman o insomnia)
    const body = req.body;

    res.json({
        message: 'Product updated',
        data: body,
        productId
    })
})

// DELETE: Eliminar un producto
router.delete('/:productId', (req, res) => {
    // Accediendo a los parámetros que vienen por URL
    const { productId } = req.params;

    res.json({
        message: 'Product deleted',
        productId
    })
})

// Exportamos módulo
module.exports = router;