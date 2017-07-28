const init = (data) => {
    const UsersData = data.users;
    return {
        register: (req, res) => {
            const username = req.body.username;
            const password = req.body.password;
            const email = req.body.email;
            UsersData.checkForFreeUsername(username, password)
                .then((validator) => {
                    if (!(validator.valid)) {
                        return res.render('user/sign-up',
                            { msg: validator.msg });
                    }
                    console.log(username);

                    return UsersData.create({
                        username: username,
                        password: password,
                        email: email,
                        name: '',
                    })
                    .then((createdUser) => {
                        return res.render('user/sign-in');
                    });
                });
        },

    };
};

module.exports = { init };
