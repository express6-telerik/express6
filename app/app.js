/*globals __dirname*/

const express = require('express');
const favicon = require('serve-favicon');
const path = require('path');


const app = express();
app.listen(3030, () => console.log('Magic'));

//const init = () => {
    app.set('view engine', 'pug');
    app.use(favicon(path.join(__dirname, '../public', '/imgs/fav.ico')));

    app.get('/404', (req, res) => {

        res.send('<h1>Error page</h1>');
    });
    app.get('/home', (req, res) => {
        return res.render('home');
    });
    //return Promise.resolve(app);
//};


module.exports = app;
