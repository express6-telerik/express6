const init = (app, data) => {
    const controller = require('./controller').init(data);

   app.get('/flats', (req, res) => {
       return controller.getAll(req, res);
   });

    app.get('/vipflats', controller.loggedIn, function(req, res, next) {
        return controller.getAll(req, res);
    });
    app.get('/addflat', controller.loggedIn, function(req, res, next) {
        return res.render('createflat');
    });

    app.post('/addflat', (req, res) => {
        return controller.addFlat(req, res);
    });

    app.get('/flat/:id', (req, res) => {
        return controller.getSingleFlat(req, res);
    });
};

module.exports = { init };
