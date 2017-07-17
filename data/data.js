const UsersData = require('./users.data');
const FlatsData = require('./flats.data');

const init = (db) => {
    return Promise.resolve({
        users: new UsersData(db),
        flats: new FlatsData(db),
    });
};

module.exports = { init };
