const db = require('../config/connection');

// Obtener todos los insumos
const getAllInsumos = async () => {
    const [rows] = await db.promise().query('SELECT * FROM insumos');
    return rows;
};

// Obtener un insumo por ID
const getInsumoById = async (id_insumo) => {
    const [rows] = await db.promise().query('SELECT * FROM insumos WHERE id_insumo = ?', [id_insumo]);
    return rows[0];
};

// Agregar un insumo
const addInsumo = async (insumo) => {
    const { nombre, cantidad, unidad, precio_unitario } = insumo;
    const [result] = await db.promise().query(
        'INSERT INTO insumos (nombre, cantidad, unidad, precio_unitario) VALUES (?, ?, ?, ?)',
        [nombre, cantidad, unidad, precio_unitario]
    );
    return result.insertId;
};

// Actualizar un insumo
const updateInsumo = async (id_insumo, insumo) => {
    const { nombre, cantidad, unidad, precio_unitario } = insumo;
    const [result] = await db.promise().query(
        'UPDATE insumos SET nombre = ?, cantidad = ?, unidad = ?, precio_unitario = ? WHERE id_insumo = ?',
        [nombre, cantidad, unidad, precio_unitario, id_insumo]
    );
    return result.affectedRows;
};

// Eliminar un insumo
const deleteInsumo = async (id_insumo) => {
    const [result] = await db.promise().query('DELETE FROM insumos WHERE id_insumo = ?', [id_insumo]);
    return result.affectedRows;
};

module.exports = { getAllInsumos, getInsumoById, addInsumo, updateInsumo, deleteInsumo };
