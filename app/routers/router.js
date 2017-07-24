/* globals __dirname */

const fs = require('fs');
const path = require('path');

const attachTo = (app, data) => {
    app.get('/', (req, res) => {
        return res.render('home');
    });
    app.get('/404', (req, res) => {
        return res.render('errorpage');
    });
    app.get('/home', (req, res) => {
        return res.render('home/home', {
            result: {
                user: req.user,
            },
        });
    });
    app.get('/contacts', (req, res) => {
        return res.render('contacts');
    });
    app.get('/register', (req, res) => {
        res.render('sign-up');
    });

    app.get('/login', (req, res) => {
        res.render('login');
    });

    app.get('/logout', (req, res) => {
        req.logout();
        res.redirect('/');
    });

    fs.readdirSync(__dirname)
        .filter((file) => file.includes('.router'))
        .forEach((file) => {
            const modulePath = path.join(__dirname, file);
            require(modulePath).attachTo(app, data);
        });
};

module.exports = { attachTo };


// const attachTo = (app, data) => {
//     const controller = require('./flats.routers/controller').init(data);
//
//     app.get('/flats', (req, res) => {
//         // user
//         return controller.getAll(req, res);
//     });
//     app.get('/404', (req, res) => {
//         return res.render('errorpage');
//     });
//     app.get('/home', (req, res) => {
//         return res.render('home');
//     });
//     app.get('/contacts', (req, res) => {
//         return res.render('contacts');
//     });
//     app.get('/', (req, res) => {
//         return res.render('home');
//     });
//     // app.get('/flats', (req, res) => {
//     //     return res.render('flats');
//     // });
//     app.post('/flats', (req, res) => {
//         const flat = req.body;
//
//         // validate item
//         return data.flats.create(flat)
//             .then((dbItem) => {
//                 return res.redirect('/flats');
//             })
//             .catch((err) => {
//                 // connect-flash
//                 req.flash('error', err);
//                 return res.redirect('/flats/form');
//             });
//     });
// };
//
// module.exports = { attachTo };
