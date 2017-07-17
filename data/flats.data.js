const BaseData = require('./base/base.data');
const Flat = require('../models/flat.model');

class FlatData extends BaseData {
    constructor(db) {
        super(db, Flat);
    }
}

module.exports = FlatData;
