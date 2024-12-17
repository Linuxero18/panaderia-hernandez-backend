const {
    getAllMovimientos,
    getMovimientoById,
    addMovimiento,
    updateMovimiento,
    deleteMovimiento
} = require('../models/cajaModel');

// Obtener todos los movimientos
const getAllMovimientosController = async (req, res) => {
    try {
        const movimientos = await getAllMovimientos();
        res.json(movimientos);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los movimientos: ' + error });
    }
};

// Obtener un movimiento por ID
const getMovimientoByIdController = async (req, res) => {
    const { id_movimiento } = req.params;
    try {
        const movimiento = await getMovimientoById(id_movimiento);
        if (!movimiento) {
            return res.status(404).json({ message: 'Movimiento no encontrado' });
        }
        res.json(movimiento);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el movimiento: ' + error });
    }
};

// Agregar un nuevo movimiento
const addMovimientoController = async (req, res) => {
    const { tipo, monto, descripcion, fecha } = req.body;
    try {
        const affectedRows = await addMovimiento({ tipo, monto, descripcion, fecha });
        res.status(201).json({ message: 'Movimiento agregado con éxito', affectedRows });
    } catch (error) {
        res.status(500).json({ message: 'Error al agregar el movimiento: ' + error });
    }
};

// Actualizar un movimiento
const updateMovimientoController = async (req, res) => {
    const { id_movimiento } = req.params;
    const { tipo, monto, descripcion, fecha } = req.body;
    try {
        const affectedRows = await updateMovimiento(id_movimiento, { tipo, monto, descripcion, fecha });
        if (affectedRows === 0) {
            return res.status(404).json({ message: 'Movimiento no encontrado' });
        }
        res.json({ message: 'Movimiento actualizado con éxito' });
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el movimiento: ' + error });
    }
};

// Eliminar un movimiento
const deleteMovimientoController = async (req, res) => {
    const { id_movimiento } = req.params;
    try {
        const affectedRows = await deleteMovimiento(id_movimiento);
        if (affectedRows === 0) {
            return res.status(404).json({ message: 'Movimiento no encontrado' });
        }
        res.json({ message: 'Movimiento eliminado con éxito' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el movimiento: ' + error });
    }
};

module.exports = {
    getAllMovimientosController,
    getMovimientoByIdController,
    addMovimientoController,
    updateMovimientoController,
    deleteMovimientoController
};
