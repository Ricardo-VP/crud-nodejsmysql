const express = require('express');
const router = express.Router(); // llamando al router de express

const conexion = require('./database/db'); // llamando a la conexion a la base de datos

router.get('/', (req, res) => { // get para contacto
    
    conexion.query('SELECT * FROM users', (err, result) => {
        if (err){
            throw err;
        }else{
            res.render('index', {result: result}) // renderizando la pagina index con el resultado de la consulta
        }
    });

});
 
module.exports = router; // exportando el router