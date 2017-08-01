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

    checkForFreeUsername(username) {
        return this.filterBy()
            .then((users) => {
                for (let i = 0; i < users.length; i+=1) {
                    if (users[i].username === username) {
                        return {
                            valid: false,
                            msg: 'Този username е зает',
                        };
                    }
                }
                return {
                    valid: true,
                    msg: 'Регистрирахте се',
                };
            });
    }
}

module.exports = UsersData;
