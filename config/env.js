// Cargar las variables de entorno
require('dotenv').config();

module.exports = {
    port: process.env.PORT || 3000,  // Puerto para el servidor
    con: {  // Configuración de la base de datos
        host: process.env.DB_HOST || 'localhost',
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || '',
        database: process.env.DB_DATABASE || 'panaderia_hernandez',
    }
};
