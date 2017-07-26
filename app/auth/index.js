const session = require('express-session');
const passport = require('passport');
const { Strategy } = require('passport-local');
const MongoStore = require('connect-mongo')(session);

const config = require('../../config');

const init = (app, data) => {
    const UserData = data.users;
    passport.use(new Strategy(

        function(username, password, done) {
            UserData.filterBy({ username: username })
                .then((user) => {
                    if (user.length === 0) {
                        return done(null, false, { message: 'Unknown User' });
                    }

                    return UserData.checkPasswords(password, user[0].password,
                        function(Match) {
                            if (Match) {
                                return done(null, user);
                            }

                            return done(null, false,
                                { message: 'Invalid password' });
                        });
                });
        }));

    app.use(session({
        store: new MongoStore({ url: config.connectionString }),
        secret: config.sessionSecret,
        resave: true,
        saveUninitialized: true,
    }));

    app.use(passport.initialize());
    app.use(passport.session());

    passport.serializeUser((user, done) => {
        done(null, user[0]._id);
    });

    passport.deserializeUser((id, done) => {
        data.users.findById(id)
            .then((user) => {
                done(null, user);
            }).catch(done);
    });

    app.use((req, res, next) => {
        res.locals = {
            user: req.user,
        };

        next();
    });
};

module.exports = { init };
