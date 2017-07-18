const init = (app, data) => {
    const controller = require('./controller').init(data);

    app.get('/items', (req, res) => {
        // auth
        return controller.getAll(req, res);
    });
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
    // app.get('/flats', (req, res) => {
    //     return res.render('flats');
    // });
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

module.exports = { init };
