const express = require('express');
const productosController = require('../controllers/productosController');
const router = express.Router();

// Ruta para obtener todos los productos
router.get('/', productosController.getAllProductosController);

// Ruta para obtener un producto por ID
router.get('/:id_producto', productosController.getProductoByIdController);

// Ruta para agregar un producto
router.post('/', productosController.addProductoController);

// Ruta para actualizar un producto
router.put('/:id_producto', productosController.updateProductoController);

// Ruta para eliminar un producto
router.delete('/:id_producto', productosController.deleteProductoController);

module.exports = router;
