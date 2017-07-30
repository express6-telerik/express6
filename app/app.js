/* globals __dirname */

const express = require('express');
const favicon = require('serve-favicon');
const path = require('path');



const init = (data) => {
   // const http = require('http');
    const app = express();
    const http = require('http').createServer(app);
    const io = require('socket.io')(http);
  //  const io = require('socket.io')(http);
    //  config
    require('./config').init(app, data);
    require('./auth').init(app, data);
    app.use(favicon(path.join(__dirname, '../public', '/imgs/fav.ico')));

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

    io.sockets.on('connection', function(client){
        client.on('message', function(msg){
            client.emit('message', msg);
        });
    });

    // io.on('connection', function(socket) {
    //     socket.on('chat message', function(msg) {
    //         io.emit('chat message', msg);
    //     });
    // });


    require('./routers').init(app, data);

    return Promise.resolve(app);
};

module.exports = { init };
