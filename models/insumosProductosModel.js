const db = require('../config/connection');

// Obtener todas las relaciones insumo-producto
const getAllInsumosProductos = async () => {
    const [rows] = await db.promise().query('SELECT * FROM insumos_productos');
    return rows;
};

// Obtener una relación insumo-producto por ID de producto e insumo
const getInsumoProductoById = async (id_producto, id_insumo) => {
    const [rows] = await db.promise().query(
        'SELECT * FROM insumos_productos WHERE id_producto = ? AND id_insumo = ?',
        [id_producto, id_insumo]
    );
    return rows[0];
};

// Agregar una relación insumo-producto
const addInsumoProducto = async (insumoProducto) => {
    const { id_producto, id_insumo, cantidad_usada } = insumoProducto;
    const [result] = await db.promise().query(
        'INSERT INTO insumos_productos (id_producto, id_insumo, cantidad_usada) VALUES (?, ?, ?)',
        [id_producto, id_insumo, cantidad_usada]
    );
    return result.affectedRows;
};

// Actualizar la cantidad usada de una relación insumo-producto
const updateInsumoProducto = async (id_producto, id_insumo, cantidad_usada) => {
    const [result] = await db.promise().query(
        'UPDATE insumos_productos SET cantidad_usada = ? WHERE id_producto = ? AND id_insumo = ?',
        [cantidad_usada, id_producto, id_insumo]
    );
    return result.affectedRows;
};

// Eliminar una relación insumo-producto
const deleteInsumoProducto = async (id_producto, id_insumo) => {
    const [result] = await db.promise().query(
        'DELETE FROM insumos_productos WHERE id_producto = ? AND id_insumo = ?',
        [id_producto, id_insumo]
    );
    return result.affectedRows;
};

module.exports = {
    getAllInsumosProductos,
    getInsumoProductoById,
    addInsumoProducto,
    updateInsumoProducto,
    deleteInsumoProducto
};
