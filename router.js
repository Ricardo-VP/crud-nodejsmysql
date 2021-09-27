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
});

// Ruta para editar un usuario
router.get('/edit/:id', (req, res) => {
    const id = req.params.id; // obteniendo el id del usuario a editar
    conexion.query('SELECT * FROM users WHERE id=?', [id], (err, result) => {
        if (err){
            throw err;
        }else{
            // renderizando la pagina edit con el resultado de la consulta
            res.render('edit', {user: result[0]}) 
        }       
    })
});
 
const crud = require('./controllers/crud'); // llamando al controlador crud
router.post('/save', crud.save); // post para guardar un nuevo usuario
router.post('/update', crud.update); // post para actualizar un usuario


module.exports = router; // exportando el router