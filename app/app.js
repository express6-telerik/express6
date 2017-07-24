 /* globals __dirname*/
// const express = require('express');
//
// const init = (data) => {
//     const app = express();
//
//     require('./config').applyTo(app);
//     require('./user').applyTo(app, data);
//
//     app.use(require('connect-flash')());
//     app.use((req, res, next) => {
//         res.locals.messages = require('express-messages')(req, res);
//         next();
//     });
//
//     require('./routers')
//         .attachTo(app, data);
//
//     return Promise.resolve(app);
// };
//
// module.exports = {
//     init,
// };

const express = require('express');
const favicon = require('serve-favicon');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const morgan = require('morgan');


const init = (data) => {
    const app = express();
    // app.listen(3080, () => console.log('Magic'));
    require('./auth').applyTo(app, data);
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(require('connect-flash')());
    // const init = () => {
    app.set('view engine', 'pug');
    app.use(favicon(path.join(__dirname, '../public', '/imgs/fav.ico')));
    app.use(cookieParser());
    app.use(session({
        secret: 'secret',
        saveUninitialized: true,
        resave: true,
    }));
    //require('./config')(app);
//
  //  app.use(passport.initialize());
  //  app.use(passport.session());

  //  app.use(flash());

    // global var
    app.use( function(req, res, next) {
        res.locals.user = req.user || null;
        next();
    });
    app.use('/static',
        express.static(
            path.join(__dirname, '../public')));
    app.use(cookieParser('keyboard cat'));
    require('./routers').attachTo(app, data);
    return Promise.resolve(app);
};


module.exports = { init };
