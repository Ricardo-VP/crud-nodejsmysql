const conexion = require('../database/db');

exports.save = (req, res) => {
    const user = req.body.user;
    const rol = req.body.rol;
    conexion.query('INSERT INTO users SET ?', {user:user, rol:rol}, (err, result) => {
        if(err) {
            console.log(err);
        }else{
            res.redirect('/');
        }
    });
}