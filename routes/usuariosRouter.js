const express = require('express');
const usuariosController = require('../controllers/usuariosController');
const router = express.Router();

// Ruta para obtener todos los usuarios
router.get('/', usuariosController.getAllUsuariosController);

// Ruta para registrar un nuevo usuario
router.post('/register', usuariosController.registerUsuarioController);

// Ruta para iniciar sesión
router.post('/login', usuariosController.loginUsuarioController);

// Ruta para validar token
router.get('/validate', usuariosController.validateTokenController);

module.exports = router;
