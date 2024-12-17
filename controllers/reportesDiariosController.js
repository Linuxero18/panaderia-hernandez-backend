const {
    getAllReportes,
    getReporteById,
    addReporte,
    updateReporte,
    deleteReporte
} = require('../models/reportesDiariosModel');

// Obtener todos los reportes diarios
const getAllReportesController = async (req, res) => {
    try {
        const reportes = await getAllReportes();
        res.json(reportes);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los reportes diarios: ' + error });
    }
};

// Obtener un reporte diario por ID
const getReporteByIdController = async (req, res) => {
    const { id_reporte } = req.params;
    try {
        const reporte = await getReporteById(id_reporte);
        if (!reporte) {
            return res.status(404).json({ message: 'Reporte diario no encontrado' });
        }
        res.json(reporte);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el reporte diario: ' + error });
    }
};

// Agregar un nuevo reporte diario
const addReporteController = async (req, res) => {
    const { fecha, total_ventas, total_pedidos, total_ingresos } = req.body;
    try {
        const affectedRows = await addReporte({ fecha, total_ventas, total_pedidos, total_ingresos });
        res.status(201).json({ message: 'Reporte diario agregado con éxito', affectedRows });
    } catch (error) {
        res.status(500).json({ message: 'Error al agregar el reporte diario: ' + error });
    }
};

// Actualizar un reporte diario
const updateReporteController = async (req, res) => {
    const { id_reporte } = req.params;
    const { fecha, total_ventas, total_pedidos, total_ingresos } = req.body;
    try {
        const affectedRows = await updateReporte(id_reporte, { fecha, total_ventas, total_pedidos, total_ingresos });
        if (affectedRows === 0) {
            return res.status(404).json({ message: 'Reporte diario no encontrado' });
        }
        res.json({ message: 'Reporte diario actualizado con éxito' });
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el reporte diario: ' + error });
    }
};

// Eliminar un reporte diario
const deleteReporteController = async (req, res) => {
    const { id_reporte } = req.params;
    try {
        const affectedRows = await deleteReporte(id_reporte);
        if (affectedRows === 0) {
            return res.status(404).json({ message: 'Reporte diario no encontrado' });
        }
        res.json({ message: 'Reporte diario eliminado con éxito' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el reporte diario: ' + error });
    }
};

module.exports = {
    getAllReportesController,
    getReporteByIdController,
    addReporteController,
    updateReporteController,
    deleteReporteController
};
