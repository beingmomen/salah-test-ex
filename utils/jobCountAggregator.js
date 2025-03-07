const Job = require('../models/jobModel');

/**
 * Aggregates job counts (total and internship) for a list of entities
 * @param {Array} entities - List of entities (locations, departments, or levels)
 * @param {string} foreignKeyField - Name of the foreign key field in Job model (e.g., 'location', 'department', 'level')
 * @returns {Array} - Original entities with jobCount (total) and interCount (internships)
 */
exports.addJobCounts = async (entities, foreignKeyField) => {
  if (!entities.length) return entities;

  const entityIds = entities.map(entity => entity._id);

  // Get job counts split by internship status
  const jobCounts = await Job.aggregate([
    {
      $match: { 
        [foreignKeyField]: { $in: entityIds },
        // Ensure we only count active jobs
        $or: [{ isDeleted: { $exists: false } }, { isDeleted: false }]
      }
    },
    {
      $group: {
        _id: {
          entity: `$${foreignKeyField}`,
          isInternship: { $ifNull: ['$isInternship', false] }
        },
        count: { $sum: 1 }
      }
    }
  ]);

  // Map the counts to entities
  return entities.map(entity => {
    const entityObj = entity.toObject ? entity.toObject() : { ...entity };
    entityObj.jobCount = 0;
    entityObj.interCount = 0;

    jobCounts.forEach(count => {
      if (count._id.entity.toString() === entity._id.toString()) {
        if (count._id.isInternship) {
          entityObj.interCount = count.count;
        } else {
          entityObj.jobCount += count.count;
        }
      }
    });

    // Add internships to total job count
    entityObj.jobCount += entityObj.interCount;

    return entityObj;
  });
};
