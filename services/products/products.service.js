// Importando faker (Permite generar data fake)
const faker = require('faker');

// Clase Servicio Productos
class ProductsService {
    constructor() {
        this.products = [];
        // Cada que se cree una instancia del servicio se ejecuta la función
        this.generateWithFaker();
    }

    // Generando productos con faker
    generateWithFaker() {
        const limit = 10;
        // Recorremos el array para agregar tantos productos queramos con faker
        for (let i = 0; i < limit; i++) {
            this.products.push({
                // Generando datos con fake
                id: faker.datatype.uuid(),
                name: faker.commerce.productName(),
                price: parseInt(faker.commerce.price(), 10),
                image: faker.image.imageUrl(),
            });
        }
    }

    // Crear Producto
    async create(data) {
        const newProduct = {
            id: faker.datatype.uuid(),
            // Concatenamos los valores que vienen por argumento
            ...data,
        };

        this.products.push(newProduct);

        return newProduct;
    }

    // Buscar Productos
    async find() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(this.products);
            }, 5000);
        });
        // return this.products;
    }

    // Buscar un producto
    async findOne(id) {
        // const name = this.getTotal();
        return this.products.find((product) => product.id === id);
    }

    // Actualizar Producto
    async update(id, changes) {
        // Obtenemos el indice del producto
        const index = this.products.findIndex((product) => product.id === id);

        if (index === -1) {
            throw new Error('Product not found');
        }

        const product = this.products[index];
        this.products[index] = {
            ...product,
            ...changes,
        };

        return this.products[index];
    }

    // Eliminar Producto
    async delete(id) {
        // Obtenemos el indice del producto
        const index = this.products.findIndex((product) => product.id === id);

        if (index === -1) {
            throw new Error('Product not found');
        }

        // Eliminando 1 producto a partir del indice encontrado
        this.products.splice(index, 1);

        return { id };
    }
}

// Exportamos módulo
module.exports = ProductsService;