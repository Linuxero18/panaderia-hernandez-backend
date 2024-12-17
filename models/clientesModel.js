const db = require('../config/connection');

// Obtener todos los clientes
const getAllClientes = async () => {
    const [rows] = await db.promise().query('SELECT * FROM clientes');
    return rows;
};

// Obtener un cliente por ID
const getClienteById = async (id_cliente) => {
    const [rows] = await db.promise().query('SELECT * FROM clientes WHERE id_cliente = ?', [id_cliente]);
    return rows[0];
};

// Agregar un cliente
const addCliente = async (cliente) => {
    const [result] = await db.promise().query('INSERT INTO clientes SET ?', [cliente]);
    return result.insertId;
};

// Actualizar un cliente por ID
const updateCliente = async (id_cliente, cliente) => {
    const [result] = await db.promise().query('UPDATE clientes SET ? WHERE id_cliente = ?', [cliente, id_cliente]);
    return result.affectedRows;
};

// Eliminar un cliente por ID
const deleteCliente = async (id_cliente) => {
    const [result] = await db.promise().query('DELETE FROM clientes WHERE id_cliente = ?', [id_cliente]);
    return result.affectedRows;
};

module.exports = { getAllClientes, getClienteById, addCliente, updateCliente, deleteCliente };
