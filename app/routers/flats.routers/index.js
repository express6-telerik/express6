const attachTo = (app, data) => {
    const controller = require('./controller').init(data);

    app.get('/flats', (req, res) => {
        // auth
        return controller.getAll(req, res);
    });

    app.get('/flats/form', (req, res) => {
        return res.send('<h1>form</h1>');
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
};

module.exports = { attachTo };
