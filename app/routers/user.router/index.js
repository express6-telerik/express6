const passport = require('passport');

const init = (app, data) => {
    const UserController = require('./controller').init(data);


    app.post('/sign-up', UserController.register);


    app.post('/sign-in', passport.authenticate('local',
        {
            successRedirect: '/',
            failureRedirect: '/errorpage',
            failureFlash: true,
        }),
        function(req, res) {
            res.render('home');
        });

    app.get('/profile/user-details', (req, res) =>{
        return UserController.getDetailedUser(req, res);
    });

    app.get('/profile/:id', (req, res) => {
        if (req.isAuthenticated()) {
            res.render('user/profile', { user: req.user });
        } else {
            res.render('errorpage', { notLogedIn: 'You are not signed-in' });
        }
    });
   // app.get('/profile/user/:id', UserController.getPublicProfile);
   // app.post('/profile/:id/update', UserController.updateProfile);
};
module.exports = { init };
