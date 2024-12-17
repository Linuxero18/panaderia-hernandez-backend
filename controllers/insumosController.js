const {
    getAllInsumos,
    getInsumoById,
    addInsumo,
    updateInsumo,
    deleteInsumo
} = require('../models/insumosModel');

// Obtener todos los insumos
const getAllInsumosController = async (req, res) => {
    try {
        const insumos = await getAllInsumos();
        res.json(insumos);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los insumos: ' + error });
    }
};

// Obtener un insumo por ID
const getInsumoByIdController = async (req, res) => {
    const { id_insumo } = req.params;
    try {
        const insumo = await getInsumoById(id_insumo);
        if (!insumo) {
            return res.status(404).json({ message: 'Insumo no encontrado' });
        }
        res.json(insumo);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el insumo: ' + error });
    }
};

// Agregar un insumo
const addInsumoController = async (req, res) => {
    const { nombre, cantidad, unidad, precio_unitario } = req.body;
    try {
        const id_insumo = await addInsumo({ nombre, cantidad, unidad, precio_unitario });
        res.status(201).json({ message: 'Insumo agregado con éxito', id_insumo });
    } catch (error) {
        res.status(500).json({ message: 'Error al agregar el insumo: ' + error });
    }
};

// Actualizar un insumo
const updateInsumoController = async (req, res) => {
    const { id_insumo } = req.params;
    const { nombre, cantidad, unidad, precio_unitario } = req.body;
    try {
        const rowsAffected = await updateInsumo(id_insumo, { nombre, cantidad, unidad, precio_unitario });
        if (rowsAffected === 0) {
            return res.status(404).json({ message: 'Insumo no encontrado' });
        }
        res.json({ message: 'Insumo actualizado con éxito' });
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el insumo: ' + error });
    }
};

// Eliminar un insumo
const deleteInsumoController = async (req, res) => {
    const { id_insumo } = req.params;
    try {
        const rowsAffected = await deleteInsumo(id_insumo);
        if (rowsAffected === 0) {
            return res.status(404).json({ message: 'Insumo no encontrado' });
        }
        res.json({ message: 'Insumo eliminado con éxito' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el insumo: ' + error });
    }
};

module.exports = {
    getAllInsumosController,
    getInsumoByIdController,
    addInsumoController,
    updateInsumoController,
    deleteInsumoController
};
