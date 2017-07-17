const init = (app, data) => {
    require('./user.router/').init(app, data);
    require('./thread.router').init(app, data);
    require('./post.router').init(app, data);

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
};

module.exports = { init };
