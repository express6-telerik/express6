const init = (data) => {
    const controller = {
        getAll(req, res) {
            return data.flats.getAll()
                .then((items) => {
                    return res.render('flats/all', {
                        context: items,
                    });
                });
        },
    };

    return controller;
};


module.exports = { init };
