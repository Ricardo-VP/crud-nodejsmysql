const express = require('express');
const router = express.Router(); // llamando al router de express

const conexion = require('./database/db'); // llamando a la conexion a la base de datos

router.get('/', (req, res) => { // get para contacto
    res.render('index', {var1: 'Hola mundo'}); // renderizando la vista index
    // conexion.query('SELECT * FROM users', (err, result) => {
    //     if (err){
    //         throw err;
    //     }else{
    //         res.send(result);
    //     }
    // });
});
 
module.exports = router; // exportando el router