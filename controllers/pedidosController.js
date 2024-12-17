const {
    getAllPedidos,
    getPedidoById,
    addPedido,
    updatePedido,
    deletePedido
} = require('../models/pedidosModel');

// Obtener todos los pedidos
const getAllPedidosController = async (req, res) => {
    try {
        const pedidos = await getAllPedidos();
        res.json(pedidos);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los pedidos: ' + error });
    }
};

// Obtener un pedido por ID
const getPedidoByIdController = async (req, res) => {
    const { id_pedido } = req.params;
    try {
        const pedido = await getPedidoById(id_pedido);
        if (!pedido) {
            return res.status(404).json({ message: 'Pedido no encontrado' });
        }
        res.json(pedido);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el pedido: ' + error });
    }
};

// Agregar un nuevo pedido
const addPedidoController = async (req, res) => {
    const { id_cliente, descripcion, precio, cantidad, total, telefono, fecha_entrega, estado } = req.body;
    try {
        const affectedRows = await addPedido({ id_cliente, descripcion, precio, cantidad, total, telefono, fecha_entrega, estado });
        res.status(201).json({ message: 'Pedido agregado con éxito', affectedRows });
    } catch (error) {
        res.status(500).json({ message: 'Error al agregar el pedido: ' + error });
    }
};

// Actualizar un pedido
const updatePedidoController = async (req, res) => {
    const { id_pedido } = req.params;
    const { id_cliente, descripcion, precio, cantidad, total, telefono, fecha_entrega, estado } = req.body;
    try {
        const affectedRows = await updatePedido(id_pedido, { id_cliente, descripcion, precio, cantidad, total, telefono, fecha_entrega, estado });
        if (affectedRows === 0) {
            return res.status(404).json({ message: 'Pedido no encontrado' });
        }
        res.json({ message: 'Pedido actualizado con éxito' });
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el pedido: ' + error });
    }
};

// Eliminar un pedido
const deletePedidoController = async (req, res) => {
    const { id_pedido } = req.params;
    try {
        const affectedRows = await deletePedido(id_pedido);
        if (affectedRows === 0) {
            return res.status(404).json({ message: 'Pedido no encontrado' });
        }
        res.json({ message: 'Pedido eliminado con éxito' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el pedido: ' + error });
    }
};

module.exports = {
    getAllPedidosController,
    getPedidoByIdController,
    addPedidoController,
    updatePedidoController,
    deletePedidoController
};
