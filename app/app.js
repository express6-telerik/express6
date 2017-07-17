/* globals __dirname*/

const express = require('express');
const favicon = require('serve-favicon');
const path = require('path');

const app = express();

    app.listen(3080, () => console.log('Magic'));

    // const init = () => {
    app.set('view engine', 'pug');
    app.use(favicon(path.join(__dirname, '../public', '/imgs/fav.ico')));
    app.use('/static',
        express.static(
            path.join(__dirname, '../public')));

    app.get('/404', (req, res) => {
        return res.render('errorpage');
    });
    app.get('/home', (req, res) => {
        return res.render('home');
    });
    app.get('/contacts', (req, res) => {
        return res.render('contacts');
    });
    app.get('/', (req, res) => {
        return res.render('home');
    });
    // return Promise.resolve(app);
// };


module.exports = app;
