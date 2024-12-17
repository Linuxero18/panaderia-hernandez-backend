const { getAllUsuarios, getUsuarioByUsername, addUsuario } = require('../models/usuariosModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Clave secreta para JWT
const SECRET_KEY = 'clave_secreta';

// Obtener todos los usuarios
const getAllUsuariosController = async (req, res) => {
    try {
        const usuarios = await getAllUsuarios();
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener usuarios: ' + error });
    }
};

// Registrar un nuevo usuario
const registerUsuarioController = async (req, res) => {
    const { usuario, password } = req.body;
    try {
        const usuarioExistente = await getUsuarioByUsername(usuario);
        if (usuarioExistente) {
            return res.status(400).json({ message: 'El usuario ya existe' });
        }

        const id = await addUsuario(usuario, password);
        res.status(201).json({ message: 'Usuario registrado con éxito', id });
    } catch (error) {
        res.status(500).json({ message: 'Error al registrar usuario: ' + error });
    }
};

// Iniciar sesión
const loginUsuarioController = async (req, res) => {
    const { usuario, password } = req.body;

    try {
        // Obtener el usuario de la base de datos
        const usuarioExistente = await getUsuarioByUsername(usuario);
        if (!usuarioExistente) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        // Verificar si la contraseña es correcta
        const passwordMatch = await bcrypt.compare(password, usuarioExistente.password);
        if (!passwordMatch) {
            return res.status(401).json({ message: 'Contraseña incorrecta' });
        }

        // Generar el token JWT
        const token = jwt.sign(
            { id_usuario: usuarioExistente.id_usuario, usuario: usuarioExistente.usuario },
            SECRET_KEY, 
            { expiresIn: '1h' }
        );

        // Responder con el token
        res.json({ message: 'Inicio de sesión exitoso', token , usuario: usuarioExistente.usuario , id_usuario: usuarioExistente.id_usuario});

    } catch (error) {
        console.error('Error en el servidor:', error); // Log para depuración
        res.status(500).json({ message: 'Error al iniciar sesión: ' + error.message });
    }
};

// Validar token
const validateTokenController = async (req, res) => {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(401).json({ message: 'Token no proporcionado' });
    }

    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        res.json({ message: 'Token válido', user: decoded });
    } catch (error) {
        res.status(401).json({ message: 'Token inválido o expirado' });
    }
};

module.exports = {
    getAllUsuariosController,
    registerUsuarioController,
    loginUsuarioController,
    validateTokenController,
};
