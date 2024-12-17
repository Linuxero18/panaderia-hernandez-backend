const express = require('express');
const insumosProductosController = require('../controllers/insumosProductosController');
const router = express.Router();

// Ruta para obtener todas las relaciones
router.get('/', insumosProductosController.getAllInsumosProductosController);

// Ruta para obtener una relación por ID de producto e insumo
router.get('/:id_producto/:id_insumo', insumosProductosController.getInsumoProductoByIdController);

// Ruta para agregar una relación
router.post('/', insumosProductosController.addInsumoProductoController);

// Ruta para actualizar una relación
router.put('/:id_producto/:id_insumo', insumosProductosController.updateInsumoProductoController);

// Ruta para eliminar una relación
router.delete('/:id_producto/:id_insumo', insumosProductosController.deleteInsumoProductoController);

module.exports = router;
