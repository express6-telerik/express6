const BaseData = require('./base/base.data');
const Flated = require('../models/flat.model');

class ItemsData extends BaseData {
    constructor(db) {
        super(db, Flated, Flated);
    }

    _isModelValid(model) {
        // custom validation
        return super._isModelValid(model);
    }
}

module.exports = ItemsData;
