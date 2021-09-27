const mysql = require('mysql');

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'crud_nodejs_mysql'
});

conexion.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Conexion establecida con exito');
    }
});