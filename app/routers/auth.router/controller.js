class TodosController {
    constructor(data) {
        this.data = data;
    }

    getSignUpForm(req, res) {
        return res.render('user/sign-up');
    }
    getSignInForm(req, res) {
        return res.render('user/sign-in');
    }
    signOut(req, res) {
        req.logout();
        return res.redirect('/');
    }

    signUp(req, res) {
        const bodyUser = req.body;

        this.data.users.findByUsername(bodyUser.username)
            .then((dbUser) => {
                if (dbUser) {
                    throw new Error('User already exists');
                }

                return this.data.users.create(bodyUser);
            })
            .then((dbUser) => {
                return res.redirect('/user/sign-in');
            })
            .catch((err) => {
                req.flash('error', err);
            });
    }
}

const init = (data) => {
    return new TodosController(data);
};

module.exports = { init };
