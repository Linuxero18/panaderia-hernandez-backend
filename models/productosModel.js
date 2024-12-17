const db = require('../config/connection');

// Obtener todos los productos
const getAllProductos = async () => {
    const [rows] = await db.promise().query('SELECT * FROM productos');
    return rows;
};

// Obtener un producto por ID
const getProductoById = async (id_producto) => {
    const [rows] = await db.promise().query('SELECT * FROM productos WHERE id_producto = ?', [id_producto]);
    return rows[0];
};

// Agregar un producto
const addProducto = async (producto) => {
    const { nombre, precio, stock } = producto;
    const [result] = await db.promise().query(
        'INSERT INTO productos (nombre, precio, stock) VALUES (?, ?, ?)',
        [nombre, precio, stock]
    );
    return result.insertId;
};

// Actualizar un producto
const updateProducto = async (id_producto, producto) => {
    const { nombre, precio, stock } = producto;
    const [result] = await db.promise().query(
        'UPDATE productos SET nombre = ?, precio = ?, stock = ? WHERE id_producto = ?',
        [nombre, precio, stock, id_producto]
    );
    return result.affectedRows;
};

// Eliminar un producto
const deleteProducto = async (id_producto) => {
    const [result] = await db.promise().query('DELETE FROM productos WHERE id_producto = ?', [id_producto]);
    return result.affectedRows;
};

module.exports = { getAllProductos, getProductoById, addProducto, updateProducto, deleteProducto };
