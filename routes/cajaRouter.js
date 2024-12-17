const express = require('express');
const cajaController = require('../controllers/cajaController');
const router = express.Router();

// Ruta para obtener todos los movimientos
router.get('/', cajaController.getAllMovimientosController);

// Ruta para obtener un movimiento por ID
router.get('/:id_movimiento', cajaController.getMovimientoByIdController);

// Ruta para agregar un nuevo movimiento
router.post('/', cajaController.addMovimientoController);

// Ruta para actualizar un movimiento
router.put('/:id_movimiento', cajaController.updateMovimientoController);

// Ruta para eliminar un movimiento
router.delete('/:id_movimiento', cajaController.deleteMovimientoController);

module.exports = router;
