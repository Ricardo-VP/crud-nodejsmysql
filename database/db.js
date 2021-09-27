const mysql = require('mysql');

const dotenv = require('dotenv'); // Load .env file
dotenv.config();
const dbpassword = process.env.DB_PASSWORD;

const conexion = mysql.createConnection({
    host: 'bqgulymk45ttgtf2zvdd-mysql.services.clever-cloud.com',
    user: 'uebzdk5ho8oyopqh',
    password: dbpassword,
    database: 'bqgulymk45ttgtf2zvdd'
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