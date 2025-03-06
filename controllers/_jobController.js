const Model = require('../models/jobModel');
const Location = require('../models/locationModel');
const Department = require('../models/departmentModel');
const Level = require('../models/levelModel');
const catchAsync = require('../utils/catchAsync');
const factory = require('./handlerFactory');
// const APIFeatures = require('../utils/apiFeatures');

exports.getAllNoPagination = factory.getAllNoPagination(Model);

exports.handelData = catchAsync(async (req, res, next) => {
  // Handle location
  if (req.query.location) {
    const documentNumbers = req.query.location
      .split(',')
      .map(num => num.trim());
    const locations = await Location.find({
      documentNumber: { $in: documentNumbers }
    });
    if (locations.length > 0) {
      req.query.location = { $in: locations.map(loc => loc._id.toString()) };
    }
  }

  // Handle department
  if (req.query.department) {
    const documentNumbers = req.query.department
      .split(',')
      .map(num => num.trim());
    const departments = await Department.find({
      documentNumber: { $in: documentNumbers }
    });
    if (departments.length > 0) {
      req.query.department = {
        $in: departments.map(dep => dep._id.toString())
      };
    }
  }

  // Handle level
  if (req.query.level) {
    const documentNumbers = req.query.level.split(',').map(num => num.trim());
    const levels = await Level.find({
      documentNumber: { $in: documentNumbers }
    });
    if (levels.length > 0) {
      req.query.level = { $in: levels.map(lvl => lvl._id.toString()) };
    }
  }

  next();
});

exports.getAll = factory.getAll(Model, {
  popOptions: [
    { path: 'location', select: 'name slug' },
    { path: 'department', select: 'name slug' },
    { path: 'level', select: 'name slug' }
  ]
});
exports.getOne = factory.getOne(Model);
exports.createOne = factory.createOne(Model);
exports.updateOne = factory.updateOne(Model);
exports.deleteOne = factory.deleteOne(Model);

exports.deleteAll = factory.deleteAll(Model);
