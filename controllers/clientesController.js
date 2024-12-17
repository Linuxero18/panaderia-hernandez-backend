const { getAllClientes, getClienteById, addCliente, updateCliente, deleteCliente } = require('../models/clientesModel');

// Obtener todos los clientes
const getAllClientesController = async (req, res) => {
    try {
        const clientes = await getAllClientes();
        res.json(clientes);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener clientes: ' + error });
    }
};

// Obtener un cliente por ID
const getClienteByIdController = async (req, res) => {
    const { id_cliente } = req.params;
    try {
        const cliente = await getClienteById(id_cliente);
        if (!cliente) {
            return res.status(404).json({ message: 'Cliente no encontrado' });
        }
        res.json(cliente);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener cliente: ' + error });
    }
};

// Agregar un cliente
const addClienteController = async (req, res) => {
    const cliente = req.body;
    try {
        const id = await addCliente(cliente);
        res.status(201).json({ message: 'Cliente agregado con éxito', id });
    } catch (error) {
        res.status(500).json({ message: 'Error al agregar cliente: ' + error });
    }
};

// Actualizar un cliente
const updateClienteController = async (req, res) => {
    const { id_cliente } = req.params;
    const cliente = req.body;
    try {
        const affectedRows = await updateCliente(id_cliente, cliente);
        if (affectedRows === 0) {
            return res.status(404).json({ message: 'Cliente no encontrado para actualizar' });
        }
        res.json({ message: 'Cliente actualizado con éxito' });
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar cliente: ' + error });
    }
};

// Eliminar un cliente
const deleteClienteController = async (req, res) => {
    const { id_cliente } = req.params;
    try {
        const affectedRows = await deleteCliente(id_cliente);
        if (affectedRows === 0) {
            return res.status(404).json({ message: 'Cliente no encontrado para eliminar' });
        }
        res.json({ message: 'Cliente eliminado con éxito' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar cliente: ' + error });
    }
};

module.exports = {
    getAllClientesController,
    getClienteByIdController,
    addClienteController,
    updateClienteController,
    deleteClienteController,
};
