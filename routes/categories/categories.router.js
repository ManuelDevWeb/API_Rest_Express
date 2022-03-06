// Importando express
const express = require('express');

const router = express.Router();

// Rutas para productos
/* LOS ENDPOINTS ESPECIFICOS DEBEN DECLARARSE ANTES DE LOS ENDPOINTS DINAMICOS!!! */

// GET: Obtener los productos que perteneces a una caterogia
router.get('/:categoryId/products/:productId', (req, res) => {
    // Accediendo a los parámetros que vienen por URL
    const { categoryId, productId } = req.params;

    res.json({
        categoryId,
        productId
    })
})


// Exportamos módulo
module.exports = router;