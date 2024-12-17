const app = require('./app');
const { port } = require('./config/env');
const db = require('./config/connection');

db.connect((err) => {
    if (err) {
        console.error('¡Advertencia! error de conexión base de datos posiblemente apagada.');
        console.log();
        process.exit(1);
        return;
    }
    console.log('Conexión exitosa a la base de datos.');
    app.listen(port, () => {
        console.log(`Servidor: http://localhost:${port}`);
    });
});