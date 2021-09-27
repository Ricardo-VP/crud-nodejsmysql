const mysql = require('mysql');

const dotenv = require('dotenv'); // Load .env file
dotenv.config();
const dbpassword = process.env.DB_PASSWORD;

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: dbpassword,
    database: 'crud_nodejs_mysql'
});

conexion.connect((err) => {
    if (err) {
        console.log(err);
        console.log(dbpassword)
    } else {
        console.log('Conexion establecida con exito');
    }
});

module.exports = conexion;