// Importando joi (Validación de datos)
const Joi = require('joi');

// Campos y sus validaciones
const productId = Joi.string().uuid();
const name = Joi.string().min(3).max(15);
const price = Joi.number().integer().min(10);
const image = Joi.string().uri();

// Esquema de producto para la creación
const createProductSchema = Joi.object({
    name: name.required(),
    price: price.required(),
    image: image.required(),
});

// Esquema de producto para la actualización
const updateProductSchema = Joi.object({
    name: name,
    price: price,
    image: image,
});

// Esquema de producto para obtener producto
const getProductSchema = Joi.object({
    productId: productId.required(),
});

// Exportamos módulo
module.exports = {
    createProductSchema,
    updateProductSchema,
    getProductSchema,
};