const express = require('express'); // import express
const app = express(); // create express app

app.listen(5000, () => { // listen for requests on port 5000
    console.log('Server started on port 5000'); 
});