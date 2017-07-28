const init = (data) => {
    const FlatsData = data.flats;
    const controller = {
        getAll(req, res) {
            return data.flats.getAll()
                .then((flats) => {
                    return res.render('flats', {
                            context: flats,
                            username: req.params.username,
                            date: req.params.date,
                            title: req.params.title,
                            content: req.params.content,
                    });
                }).catch((err) => {
                    console.error(err);
                });
        },
        addFlat(req, res) {
            const username = req.body.username;
            const title = req.body.title;
            const date = req.body.date;
            const content = req.body.content;
                    return FlatsData.create({
                        username: username,
                        date: '',
                        title: '',
                        content: '',
                    })
                        .catch((err) => {
                            console.error(err);
                        })
                        .then((createdUser) => {
                            return res.render('flats');
                        });
               // });
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
