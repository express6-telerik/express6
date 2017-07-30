const multer = require('multer');

const init = () => {
    return multer.diskStorage({
        destination: function(req, file, callback) {
            callback(null, './static/imgs/flats');
        },
        filename: function(req, file, callback) {
            callback(null, req.flats._id + file.name);
        },
    });
};

module.exports = { init };
