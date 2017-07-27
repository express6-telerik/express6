const BaseData = require('./base/base.data');
const Flat = require('../models/flat.model');

class FlatData extends BaseData {
    constructor(db) {
        super(db, Flat, Flat);
    }

    _isModelValid(model) {
        // custom validation
        return super._isModelValid(model);
    }
}

module.exports = FlatData;
