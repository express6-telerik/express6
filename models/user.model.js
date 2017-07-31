const convert = require('../public/js/inputConverter').convert;
const { validator } = require('../public/js/validator');
class User {
    constructor(username, password, email, name) {
        this._username = username;
        this._password = password;
        this._email = email;
        this._name = name;
    }


    get username() {
        return this._username;
    }

    set username(value) {
        console.log(value+'ffff');
const nameVal = convert(value);
        validator.validateIfUndefinedOrNull(nameVal, 'Username');
        validator.validateTypeOf(nameVal, 'Username');
        validator.validateUsername(nameVal);
        this._username = value;
    }

    get password() {
        return this._password;
    }

    set password(value) {
        this._password = value;
    }

    get email() {
        return this._email;
    }

    set email(value) {
        this._email = value;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }
}

module.exports = User;
