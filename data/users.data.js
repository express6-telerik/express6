const BaseData = require('./base/base.data');
const User = require('../models/user.model');

class UsersData extends BaseData {
    constructor(db) {
 super(db, User, User);
    }
    findByUsername(username) {
        return this
            .filterBy({ username: new RegExp(username, 'i') })
            .then(([user]) => user);
    }

    checkPasswords(signinPassword, userPassword, callback) {
        if (signinPassword !== userPassword) {
            return callback(false);
        }

        return callback(true);
    }

    // checkPasswords(username, password) {
    //     return this.findByUsername(username)
    //         .then((user) => {
    //             if (!user) {
    //                 throw new Error('Invalid user');
    //             }
    //
    //             if (user.password !== password) {
    //                 throw new Error('Invalid password');
    //             }
    //
    //             return true;
    //         })
    //         .catch((err) => {
    //             console.error(err);
    //         });
    // }

    checkForFreeUsername(username, email) {
        return this.filterBy()
            .then((users) => {
                for (let index = 0; index < users.length; index++) {
                    if (users[index].username === username) {
                        return {
                            valid: false,
                            msg: 'username is already taken',
                        };
                    }

                    if (users[index].email === email) {
                        return {
                            valid: false,
                            msg: 'email is already in use',
                        };
                    }
                }
                return {
                    valid: true,
                    msg: 'no errors',
                };
            });
    }
}

module.exports = UsersData;
