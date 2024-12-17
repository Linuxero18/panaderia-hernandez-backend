const express = require('express');
const clientesController = require('../controllers/clientesController');
const router = express.Router();

// Ruta para obtener todos los clientes
router.get('/', clientesController.getAllClientesController);

// Ruta para obtener un cliente por ID
router.get('/:id_cliente', clientesController.getClienteByIdController);

// Ruta para agregar un cliente
router.post('/', clientesController.addClienteController);

// Ruta para actualizar un cliente por ID
router.put('/:id_cliente', clientesController.updateClienteController);

// Ruta para eliminar un cliente por ID
router.delete('/:id_cliente', clientesController.deleteClienteController);

module.exports = router;
