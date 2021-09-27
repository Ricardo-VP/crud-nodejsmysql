const express = require('express');
const router = express.Router(); // llamando al router de express

router.get('/contacto', (req, res) => { // get para contacto
    res.send('contacto');
});
 
module.exports = router; // exportando el router