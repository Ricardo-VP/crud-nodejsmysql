const express = require('express');
const router = express.Router(); // llamando al router de express

const conexion = require('./database/db'); // llamando a la conexion a la base de datos

// Ruta para obtener todos los usuarios
router.get('/', (req, res) => { // get para contacto
    
    conexion.query('SELECT * FROM users', (err, result) => {
        if (err){
            throw err;
        }else{
            res.render('index', {result: result}) // renderizando la pagina index con el resultado de la consulta
        }
    });

});

// Ruta para crear un nuevo usuario
router.get('/create', (req, res) => {
    res.render('create'); // renderizando la pagina create
})
 
module.exports = router; // exportando el router