const express = require('express');
const insumosController = require('../controllers/insumosController');
const router = express.Router();

// Ruta para obtener todos los insumos
router.get('/', insumosController.getAllInsumosController);

// Ruta para obtener un insumo por ID
router.get('/:id_insumo', insumosController.getInsumoByIdController);

// Ruta para agregar un insumo
router.post('/', insumosController.addInsumoController);

// Ruta para actualizar un insumo
router.put('/:id_insumo', insumosController.updateInsumoController);

// Ruta para eliminar un insumo
router.delete('/:id_insumo', insumosController.deleteInsumoController);

module.exports = router;
