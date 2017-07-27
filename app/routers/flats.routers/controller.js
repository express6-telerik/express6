const init = (data) => {
    const controller = {
        getAll(req, res) {
            return data.flats.getAll()
                .then((items) => {
                    return res.render('flats', {
                        context: items,
                    });
                });
        },
        addFlat(req, res) {
            return data.flats.addFlat()
                .then((items) => {
                    return res.render('flats', {
                        context: items,
                    });
                });
        },
        loggedIn(req, res, next) {
        if (req.user) {
            next();
            console.log(req.user);
        } else {
            res.redirect('/sign-in');
        }
    },
    };

    return controller;
};


module.exports = { init };
