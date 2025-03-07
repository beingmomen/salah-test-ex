const Model = require('../models/locationModel');
const factory = require('./handlerFactory');
const catchAsync = require('../utils/catchAsync');
const { addJobCounts } = require('../utils/jobCountAggregator');

exports.getAllNoPagination = catchAsync(async (req, res, next) => {
  const { optFilter = {}, popOptions = [], selectFields = '' } = req.query || {};

  const query = Model.find({ 
    ...optFilter,
    // Ensure we only get active locations
    $or: [{ isDeleted: { $exists: false } }, { isDeleted: false }]
  }).select(selectFields);

  if (popOptions.length > 0) {
    query.populate(popOptions);
  }

  const locations = await query;
  const locationsWithCounts = await addJobCounts(locations, 'location');

  res.status(200).json(locationsWithCounts);
});

exports.getAll = factory.getAll(Model);
exports.getOne = factory.getOne(Model);
exports.createOne = factory.createOne(Model);
exports.updateOne = factory.updateOne(Model);
exports.deleteOne = factory.deleteOne(Model);

exports.deleteAll = factory.deleteAll(Model);
