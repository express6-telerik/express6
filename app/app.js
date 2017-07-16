const express = require('express');

const app = express();
app.listen(3000, () => console.log('Magic'));

//const init = () => {
    app.set('view engine', 'pug');
    app.get('/404', (req, res) => {

        res.send('<h1>Error page</h1>');
    });
    app.get('/home', (req, res) => {
        return res.render('home');
    });
    //return Promise.resolve(app);
//};


module.exports = app;
