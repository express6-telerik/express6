const init = (data) => {
    const FlatsData = data.flats;
    return {
        getAll: (req, res) => { console.log(req);
            return data.flats.getAll()

                .then((flats) => {
                let renView = '';
                console.log(req.url);
                    if (req.url==='/flats') {
                        renView = 'flats'
                    }else{
                        renView = 'vipflats'
                    }
                    return res.render(renView, {
                        context: flats,
                        username: req.params.username,
                        startDate: req.params.startDate,
                        endDate: req.params.endDate,
                        title: req.params.title,
                        content: req.params.content,
                        vipstatus: req.params.vipstatus,
                        location: req.params.location,
                        neededMates: req.params.neededMates,
                        price: req.params.price,
                        img: req.params.img,


                    });
                }).catch((err) => {
                    console.error(err);
                });
        },
        addFlat: (req, res) => {
            const username = req.body.username;
            const title = req.body.title;
            const content = req.body.content || '';
            const startDate = req.body.startDate;
            const endDate = req.body.endDate;
            const vipstatus = req.body.vipstatus;
            const location = req.body.location;
            const neededMates = req.body.neededMates;
            const price = req.body.price;
            const img = req.body.img || '/static/imgs/flats/default.jpg';

            return FlatsData.create({
                username: username,
                startDate: startDate,
                title: title,
                content: content,
                endDate: endDate,
                vipstatus: vipstatus,
                location: location,
                neededMates: neededMates,
                price: price,
                img: img,
            })
                .then (data.users)
                .then((user) => {
                    return {
                        result: {
                            user: user,
                        },
                    };
                })
                .then((createdFlat) => {
                    return res.redirect('/flats');
                });
        },
        loggedIn: (req, res, next) => {
            if (req.user) {
                next();
                console.log(req.user);
            } else {
                res.redirect('/sign-in');
            }
        },
        filterBy: (req, res) => {
            console.log(req.params.id);
                return FlatsData.findById(req.params.id)
                    .then((flat) => {
                    console.log(FlatsData);
                        return res.render('flat',
                            { flat: flat, id: flat.id, title: flat.title,
                                username: flat.username,
                                content: flat.content });
                    });
        },
    };
};


module.exports = { init };
