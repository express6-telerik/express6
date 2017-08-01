/* globals __dirname */

const express = require('express');
const favicon = require('serve-favicon');
const path = require('path');


const init = (data) => {
   // const http = require('http');
    const app = express();


    const server = require('http').createServer(app);
    require('socket.io')(server);
    app.use(require('connect-flash')());
    app.use(function(req, res, next) {
        res.locals.messages = require('express-messages')(req, res);
        next();
    });
    app.get('/chat', (req, res) => {
    return res.render('chat', { chat: req });
    });

    app.use(favicon(path.join(__dirname, '../public', '/imgs/fav.ico')));

    require('./config').init(app, data);
    require('./auth').init(app, data);
    app.use('/public', express.static('static'));

    // global var
    app.use( function(req, res, next) {
        res.locals.user = req.user;
        res.locals.authenticated = req.isAuthenticated();
        next();
    });
    app.use('/static',
        express.static(
            path.join(__dirname, '../public')));

    app.use('/libs',
        express.static(
            path.join(__dirname, '../node_modules')));

    require('./routers').init(app, data);

    return Promise.resolve(app);
};

module.exports = { init };
