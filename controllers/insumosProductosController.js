const {
    getAllInsumosProductos,
    getInsumoProductoById,
    addInsumoProducto,
    updateInsumoProducto,
    deleteInsumoProducto
} = require('../models/insumosProductosModel');

// Obtener todas las relaciones insumo-producto
const getAllInsumosProductosController = async (req, res) => {
    try {
        const insumosProductos = await getAllInsumosProductos();
        res.json(insumosProductos);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener las relaciones: ' + error });
    }
};

// Obtener una relación insumo-producto por ID
const getInsumoProductoByIdController = async (req, res) => {
    const { id_producto, id_insumo } = req.params;
    try {
        const insumoProducto = await getInsumoProductoById(id_producto, id_insumo);
        if (!insumoProducto) {
            return res.status(404).json({ message: 'Relación no encontrada' });
        }
        res.json(insumoProducto);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener la relación: ' + error });
    }
};

// Agregar una relación insumo-producto
const addInsumoProductoController = async (req, res) => {
    const { id_producto, id_insumo, cantidad_usada } = req.body;
    try {
        const affectedRows = await addInsumoProducto({ id_producto, id_insumo, cantidad_usada });
        res.status(201).json({ message: 'Relación agregada con éxito', affectedRows });
    } catch (error) {
        res.status(500).json({ message: 'Error al agregar la relación: ' + error });
    }
};

// Actualizar una relación insumo-producto
const updateInsumoProductoController = async (req, res) => {
    const { id_producto, id_insumo } = req.params;
    const { cantidad_usada } = req.body;
    try {
        const affectedRows = await updateInsumoProducto(id_producto, id_insumo, cantidad_usada);
        if (affectedRows === 0) {
            return res.status(404).json({ message: 'Relación no encontrada' });
        }
        res.json({ message: 'Relación actualizada con éxito' });
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar la relación: ' + error });
    }
};

// Eliminar una relación insumo-producto
const deleteInsumoProductoController = async (req, res) => {
    const { id_producto, id_insumo } = req.params;
    try {
        const affectedRows = await deleteInsumoProducto(id_producto, id_insumo);
        if (affectedRows === 0) {
            return res.status(404).json({ message: 'Relación no encontrada' });
        }
        res.json({ message: 'Relación eliminada con éxito' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar la relación: ' + error });
    }
};

module.exports = {
    getAllInsumosProductosController,
    getInsumoProductoByIdController,
    addInsumoProductoController,
    updateInsumoProductoController,
    deleteInsumoProductoController
};
