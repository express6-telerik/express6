const init = (app, data) => {
    const controller = require('./controller').init(data);

   app.get('/flats', (req, res) => {
       return controller.getAll(req, res);
   });

    app.post('/flats', (req, res) => {
        const flat = req.body;

        // validate item
        return data.flats.create(flat)
            .then((dbItem) => {
                return res.redirect('/flats');
            })
            .catch((err) => {
                // connect-flash
                req.flash('error', err);
                return res.redirect('/flats/form');
            });
    });
    app.post('/vipflats', (req, res) => {
        const flat = req.body;

        // validate item
        return data.flats.create(flat)
            .then((dbItem) => {
                return res.redirect('/vipflats');
            })
            .catch((err) => {
                // connect-flash
                req.flash('error', err);
                return res.redirect('/vipflats/form');
            });
    });

    app.get('/vipflats', controller.loggedIn, function(req, res, next) {
        return controller.getAll(req, res);

    });
};

module.exports = { init };
