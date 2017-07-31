const passport = require('passport');

const init = (app, data) => {
    const UserController = require('./controller').init(data);


    app.post('/sign-up', UserController.register);


    app.post('/sign-in', passport.authenticate('local',
        {
            successRedirect: '/',
            failureRedirect: '/404',
            failureFlash: true,
        }),
        function(req, res) {
            res.render('home');
        });


    app.get('/profile/:username', (req, res) => {
        return UserController.getDetailedUser(req, res);
    });

   // app.get('/profile/user/:id', UserController.getPublicProfile);
    // app.post('/profile/:id/update', UserController.updateProfile);
};
module.exports = { init };
