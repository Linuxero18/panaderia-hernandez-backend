const {
    getAllProductos,
    getProductoById,
    addProducto,
    updateProducto,
    deleteProducto
} = require('../models/productosModel');

// Obtener todos los productos
const getAllProductosController = async (req, res) => {
    try {
        const productos = await getAllProductos();
        res.json(productos);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener productos: ' + error });
    }
};

// Obtener un producto por ID
const getProductoByIdController = async (req, res) => {
    const { id_producto } = req.params;
    try {
        const producto = await getProductoById(id_producto);
        if (!producto) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }
        res.json(producto);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el producto: ' + error });
    }
};

// Agregar un producto
const addProductoController = async (req, res) => {
    const { nombre, precio, stock } = req.body;
    try {
        const id_producto = await addProducto({ nombre, precio, stock });
        res.status(201).json({ message: 'Producto agregado con éxito', id_producto });
    } catch (error) {
        res.status(500).json({ message: 'Error al agregar el producto: ' + error });
    }
};

// Actualizar un producto
const updateProductoController = async (req, res) => {
    const { id_producto } = req.params;
    const { nombre, precio, stock } = req.body;
    try {
        const rowsAffected = await updateProducto(id_producto, { nombre, precio, stock });
        if (rowsAffected === 0) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }
        res.json({ message: 'Producto actualizado con éxito' });
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el producto: ' + error });
    }
};

// Eliminar un producto
const deleteProductoController = async (req, res) => {
    const { id_producto } = req.params;
    try {
        const rowsAffected = await deleteProducto(id_producto);
        if (rowsAffected === 0) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }
        res.json({ message: 'Producto eliminado con éxito' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el producto: ' + error });
    }
};

module.exports = {
    getAllProductosController,
    getProductoByIdController,
    addProductoController,
    updateProductoController,
    deleteProductoController
};
