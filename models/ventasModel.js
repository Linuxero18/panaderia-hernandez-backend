const db = require('../config/connection');

// Obtener todas las ventas
const getAllVentas = async () => {
    const [rows] = await db.promise().query('SELECT * FROM ventas');
    return rows;
};

// Obtener una venta por ID
const getVentaById = async (id_venta) => {
    const [rows] = await db.promise().query('SELECT * FROM ventas WHERE id_venta = ?', [id_venta]);
    return rows[0];
};

// Agregar una nueva venta
const addVenta = async (venta) => {
    const { id_cliente, id_producto, cantidad, precio_unitario, precio_total, tipo_pago, fecha_venta } = venta;
    const [result] = await db.promise().query(
        'INSERT INTO ventas (id_cliente, id_producto, cantidad, precio_unitario, precio_total, tipo_pago, fecha_venta) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [id_cliente, id_producto, cantidad, precio_unitario, precio_total, tipo_pago, fecha_venta]
    );
    return result.affectedRows;
};

// Actualizar una venta
const updateVenta = async (id_venta, venta) => {
    const { id_cliente, id_producto, cantidad, precio_unitario, precio_total, tipo_pago, fecha_venta } = venta;
    const [result] = await db.promise().query(
        'UPDATE ventas SET id_cliente = ?, id_producto = ?, cantidad = ?, precio_unitario = ?, precio_total = ?, tipo_pago = ?, fecha_venta = ? WHERE id_venta = ?',
        [id_cliente, id_producto, cantidad, precio_unitario, precio_total, tipo_pago, fecha_venta, id_venta]
    );
    return result.affectedRows;
};

// Eliminar una venta
const deleteVenta = async (id_venta) => {
    const [result] = await db.promise().query('DELETE FROM ventas WHERE id_venta = ?', [id_venta]);
    return result.affectedRows;
};

module.exports = {
    getAllVentas,
    getVentaById,
    addVenta,
    updateVenta,
    deleteVenta
};
