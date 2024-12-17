require('dotenv').config();
const mysql = require('mysql2');
const env = require('./env');

const db = mysql.createConnection(env.con);

module.exports = db;