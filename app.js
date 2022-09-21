const express = require('express');
const path    = require('path');

const app     = express();

app.set('view engine', 'ejs');

app.get('/hello', (req, res) => {
    res.render('hello');
});

app.get('/world', (req, res) => {
    res.render('world');
});

app.get('/:query', (req, res) => {
    res.render('generic', {
        data: {
            query: req.params.query
        }
    });
});

app.listen(3000, () => {
    console.log('Server Listening on 3000');
});