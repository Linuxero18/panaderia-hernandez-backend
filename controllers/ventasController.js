const {
    getAllVentas,
    getVentaById,
    addVenta,
    updateVenta,
    deleteVenta
} = require('../models/ventasModel');

// Obtener todas las ventas
const getAllVentasController = async (req, res) => {
    try {
        const ventas = await getAllVentas();
        res.json(ventas);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener las ventas: ' + error });
    }
};

// Obtener una venta por ID
const getVentaByIdController = async (req, res) => {
    const { id_venta } = req.params;
    try {
        const venta = await getVentaById(id_venta);
        if (!venta) {
            return res.status(404).json({ message: 'Venta no encontrada' });
        }
        res.json(venta);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener la venta: ' + error });
    }
};

// Agregar una nueva venta
const addVentaController = async (req, res) => {
    const { id_cliente, id_producto, cantidad, precio_unitario, precio_total, tipo_pago, fecha_venta } = req.body;
    try {
        const affectedRows = await addVenta({ id_cliente, id_producto, cantidad, precio_unitario, precio_total, tipo_pago, fecha_venta });
        res.status(201).json({ message: 'Venta agregada con éxito', affectedRows });
    } catch (error) {
        res.status(500).json({ message: 'Error al agregar la venta: ' + error });
    }
};

// Actualizar una venta
const updateVentaController = async (req, res) => {
    const { id_venta } = req.params;
    const { id_cliente, id_producto, cantidad, precio_unitario, precio_total, tipo_pago, fecha_venta } = req.body;
    try {
        const affectedRows = await updateVenta(id_venta, { id_cliente, id_producto, cantidad, precio_unitario, precio_total, tipo_pago, fecha_venta });
        if (affectedRows === 0) {
            return res.status(404).json({ message: 'Venta no encontrada' });
        }
        res.json({ message: 'Venta actualizada con éxito' });
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar la venta: ' + error });
    }
};

// Eliminar una venta
const deleteVentaController = async (req, res) => {
    const { id_venta } = req.params;
    try {
        const affectedRows = await deleteVenta(id_venta);
        if (affectedRows === 0) {
            return res.status(404).json({ message: 'Venta no encontrada' });
        }
        res.json({ message: 'Venta eliminada con éxito' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar la venta: ' + error });
    }
};

module.exports = {
    getAllVentasController,
    getVentaByIdController,
    addVentaController,
    updateVentaController,
    deleteVentaController
};
