const express = require('express');
const ventasController = require('../controllers/ventasController');
const router = express.Router();

// Ruta para obtener todas las ventas
router.get('/', ventasController.getAllVentasController);

// Ruta para obtener una venta por ID
router.get('/:id_venta', ventasController.getVentaByIdController);

// Ruta para agregar una nueva venta
router.post('/', ventasController.addVentaController);

// Ruta para actualizar una venta
router.put('/:id_venta', ventasController.updateVentaController);

// Ruta para eliminar una venta
router.delete('/:id_venta', ventasController.deleteVentaController);

module.exports = router;
