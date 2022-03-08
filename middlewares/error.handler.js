// Middlewares globales para capturar cualquier error

// Middleware para logear errores
function logErrors(err, req, res, next) {
    console.log('logErrors');
    console.log(err);
    // Next permite ejecutar el siguiente middleware
    next(err);
}

// Middleware para crear formato estandar cada que haya error
function errorHandler(err, req, res, next) {
    console.log('errorHandler');
    res.status(500).json({
        message: err.message,
        stack: err.stack,
    });
    // Next permite ejecutar el siguiente middleware
    next(err);
}

// Exportamos módulo
module.exports = { logErrors, errorHandler };