const db = require('../config/connection');

// Obtener todos los movimientos
const getAllMovimientos = async () => {
    const [rows] = await db.promise().query('SELECT * FROM caja');
    return rows;
};

// Obtener un movimiento por ID
const getMovimientoById = async (id_movimiento) => {
    const [rows] = await db.promise().query('SELECT * FROM caja WHERE id_movimiento = ?', [id_movimiento]);
    return rows[0];
};

// Agregar un nuevo movimiento
const addMovimiento = async (movimiento) => {
    const { tipo, monto, descripcion, fecha } = movimiento;
    const [result] = await db.promise().query(
        'INSERT INTO caja (tipo, monto, descripcion, fecha) VALUES (?, ?, ?, ?)',
        [tipo, monto, descripcion, fecha]
    );
    return result.affectedRows;
};

// Actualizar un movimiento
const updateMovimiento = async (id_movimiento, movimiento) => {
    const { tipo, monto, descripcion, fecha } = movimiento;
    const [result] = await db.promise().query(
        'UPDATE caja SET tipo = ?, monto = ?, descripcion = ?, fecha = ? WHERE id_movimiento = ?',
        [tipo, monto, descripcion, fecha, id_movimiento]
    );
    return result.affectedRows;
};

// Eliminar un movimiento
const deleteMovimiento = async (id_movimiento) => {
    const [result] = await db.promise().query('DELETE FROM caja WHERE id_movimiento = ?', [id_movimiento]);
    return result.affectedRows;
};

module.exports = {
    getAllMovimientos,
    getMovimientoById,
    addMovimiento,
    updateMovimiento,
    deleteMovimiento
};
