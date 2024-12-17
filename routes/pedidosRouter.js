const express = require('express');
const pedidosController = require('../controllers/pedidosController');
const router = express.Router();

// Ruta para obtener todos los pedidos
router.get('/', pedidosController.getAllPedidosController);

// Ruta para obtener un pedido por ID
router.get('/:id_pedido', pedidosController.getPedidoByIdController);

// Ruta para agregar un nuevo pedido
router.post('/', pedidosController.addPedidoController);

// Ruta para actualizar un pedido
router.put('/:id_pedido', pedidosController.updatePedidoController);

// Ruta para eliminar un pedido
router.delete('/:id_pedido', pedidosController.deletePedidoController);

module.exports = router;
