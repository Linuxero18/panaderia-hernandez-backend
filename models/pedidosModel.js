const db = require('../config/connection');

// Obtener todos los pedidos
const getAllPedidos = async () => {
    const [rows] = await db.promise().query('SELECT * FROM pedidos');
    return rows;
};

// Obtener un pedido por ID
const getPedidoById = async (id_pedido) => {
    const [rows] = await db.promise().query('SELECT * FROM pedidos WHERE id_pedido = ?', [id_pedido]);
    return rows[0];
};

// Agregar un nuevo pedido
const addPedido = async (pedido) => {
    const { id_cliente, descripcion, precio, cantidad, total, telefono, fecha_entrega, estado } = pedido;
    const [result] = await db.promise().query(
        'INSERT INTO pedidos (id_cliente, descripcion, precio, cantidad, total, telefono, fecha_entrega, estado) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
        [id_cliente, descripcion, precio, cantidad, total, telefono, fecha_entrega, estado]
    );
    return result.affectedRows;
};

// Actualizar un pedido
const updatePedido = async (id_pedido, pedido) => {
    const { id_cliente, descripcion, precio, cantidad, total, telefono, fecha_entrega, estado } = pedido;
    const [result] = await db.promise().query(
        'UPDATE pedidos SET id_cliente = ?, descripcion = ?, precio = ?, cantidad = ?, total = ?, telefono = ?, fecha_entrega = ?, estado = ? WHERE id_pedido = ?',
        [id_cliente, descripcion, precio, cantidad, total, telefono, fecha_entrega, estado, id_pedido]
    );
    return result.affectedRows;
};

// Eliminar un pedido
const deletePedido = async (id_pedido) => {
    const [result] = await db.promise().query('DELETE FROM pedidos WHERE id_pedido = ?', [id_pedido]);
    return result.affectedRows;
};

module.exports = {
    getAllPedidos,
    getPedidoById,
    addPedido,
    updatePedido,
    deletePedido
};
