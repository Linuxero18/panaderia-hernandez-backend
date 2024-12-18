const express = require('express');
const cors = require('cors');
const clientesRouter = require('./routes/clientesRouter');
const usuariosRouter = require('./routes/usuariosRouter');
const productosRouter = require('./routes/productosRouter');
const insumosRouter = require('./routes/insumosRouter');
const pedidosRouter = require('./routes/pedidosRouter');
const cajaRouter = require('./routes/cajaRouter');
const ventasRouter = require('./routes/ventasRouter');
const reportesDiariosRouter = require('./routes/reportesDiariosRouter');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/clientes', clientesRouter);
app.use('/usuarios', usuariosRouter);
app.use('/productos', productosRouter);
app.use('/insumos', insumosRouter);
app.use('/pedidos', pedidosRouter);
app.use('/caja', cajaRouter);
app.use('/ventas', ventasRouter);
app.use('/reportes-diarios', reportesDiariosRouter);

module.exports = app;