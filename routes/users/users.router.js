// Importando express
const express = require('express');

const router = express.Router();

// Rutas para productos
/* LOS ENDPOINTS ESPECIFICOS DEBEN DECLARARSE ANTES DE LOS ENDPOINTS DINAMICOS!!! */

// GET: Obtener usuarios
router.get('/', (req, res) => {
    // Accediendo a los querys que vienen por URL
    const { limit, offset } = req.query;

    if (limit && offset) {
        res.json({
            limit,
            offset
        })
    } else {
        res.send('No se encontraron los parámetros requeridos');
    }
})


// Exportamos módulo
module.exports = router;