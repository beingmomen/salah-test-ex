const Model = require('../models/locationModel');
const factory = require('./handlerFactory');

exports.getAllNoPagination = factory.getAllNoPagination(Model);

exports.getAll = factory.getAll(Model);
exports.getOne = factory.getOne(Model);
exports.createOne = factory.createOne(Model);
exports.updateOne = factory.updateOne(Model);
exports.deleteOne = factory.deleteOne(Model);

exports.deleteAll = factory.deleteAll(Model);
