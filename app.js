const express = require('express'); // import express
const app = express(); // create express app

app.set('view engine', 'ejs'); // set view engine to ejs

app.use(express.urlencoded({ extended: false })); // use express.urlencoded
app.use(express.json()); // use express.json

app.use('/', require('./router')); // use router

app.listen(5000, () => { // listen for requests on port 5000
    console.log('Server started on port 5000'); 
});