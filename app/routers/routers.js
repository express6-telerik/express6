const init = (app, data) => {
    require('./user.router/').init(app, data);
    require('./flats.routers/').init(app, data);


    app.get('/', (req, res) => {
        return res.render('home');
    });
    app.get('/404', (req, res) => {
        return res.render('errorpage');
    });
    app.get('/home', (req, res) => {
        return res.render('home', {
            result: {
                user: req.user,
            },
        });
    });
    app.get('/contacts', (req, res) => {
        return res.render('contacts');
    });
    app.get('/sign-up', (req, res) => {
        res.render('user/sign-up');
    });

    app.get('/sign-in', (req, res) => {
        res.render('user/sign-in');
    });

    app.get('/sign-out', (req, res) => {
        req.logout();
        res.redirect('/');
    });
};

    module.exports = { init };
