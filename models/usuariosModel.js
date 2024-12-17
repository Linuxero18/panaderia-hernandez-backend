const db = require('../config/connection');
const bcrypt = require('bcrypt');

// Obtener todos los usuarios
const getAllUsuarios = async () => {
    const [rows] = await db.promise().query('SELECT id_usuario, usuario FROM usuarios');
    return rows;
};

// Obtener un usuario por nombre de usuario
const getUsuarioByUsername = async (usuario) => {
    try {
        // Realizar la consulta a la base de datos
        const [rows] = await db.promise().query('SELECT * FROM usuarios WHERE usuario = ?', [usuario]);
        return rows[0]; // Si existe el usuario, devolverlo
    } catch (error) {
        console.error('Error al obtener el usuario:', error); // Log para depuración
        console.log('Usuario encontrado:', rows[0]);
        throw new Error('Error al consultar la base de datos');
    }
};

// Agregar un usuario (con contraseña encriptada)
const addUsuario = async (usuario, password) => {
    const hashedPassword = await bcrypt.hash(password, 10); // Encripta la contraseña
    const [result] = await db.promise().query('INSERT INTO usuarios (usuario, password) VALUES (?, ?)', [usuario, hashedPassword]);
    return result.insertId;
};

module.exports = { getAllUsuarios, getUsuarioByUsername, addUsuario };
