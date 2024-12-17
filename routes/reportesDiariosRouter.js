const express = require('express');
const reportesController = require('../controllers/reportesDiariosController');
const router = express.Router();

// Ruta para obtener todos los reportes diarios
router.get('/', reportesController.getAllReportesController);

// Ruta para obtener un reporte diario por ID
router.get('/:id_reporte', reportesController.getReporteByIdController);

// Ruta para agregar un nuevo reporte diario
router.post('/', reportesController.addReporteController);

// Ruta para actualizar un reporte diario
router.put('/:id_reporte', reportesController.updateReporteController);

// Ruta para eliminar un reporte diario
router.delete('/:id_reporte', reportesController.deleteReporteController);

module.exports = router;
