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
    };

    return controller;
};


module.exports = { init };
