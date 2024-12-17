const db = require('../config/connection');

// Obtener todos los reportes diarios
const getAllReportes = async () => {
    const [rows] = await db.promise().query('SELECT * FROM reportes_diarios');
    return rows;
};

// Obtener un reporte diario por ID
const getReporteById = async (id_reporte) => {
    const [rows] = await db.promise().query('SELECT * FROM reportes_diarios WHERE id_reporte = ?', [id_reporte]);
    return rows[0];
};

// Agregar un nuevo reporte diario
const addReporte = async (reporte) => {
    const { fecha, total_ventas, total_pedidos, total_ingresos } = reporte;
    const [result] = await db.promise().query(
        'INSERT INTO reportes_diarios (fecha, total_ventas, total_pedidos, total_ingresos) VALUES (?, ?, ?, ?)',
        [fecha, total_ventas, total_pedidos, total_ingresos]
    );
    return result.affectedRows;
};

// Actualizar un reporte diario
const updateReporte = async (id_reporte, reporte) => {
    const { fecha, total_ventas, total_pedidos, total_ingresos } = reporte;
    const [result] = await db.promise().query(
        'UPDATE reportes_diarios SET fecha = ?, total_ventas = ?, total_pedidos = ?, total_ingresos = ? WHERE id_reporte = ?',
        [fecha, total_ventas, total_pedidos, total_ingresos, id_reporte]
    );
    return result.affectedRows;
};

// Eliminar un reporte diario
const deleteReporte = async (id_reporte) => {
    const [result] = await db.promise().query('DELETE FROM reportes_diarios WHERE id_reporte = ?', [id_reporte]);
    return result.affectedRows;
};

module.exports = {
    getAllReportes,
    getReporteById,
    addReporte,
    updateReporte,
    deleteReporte
};
