const express = require('express');
const controller = require('../controllers/_levelController');
const authController = require('../controllers/authController');

const router = express.Router();

router
  .route('/')
  .get(controller.getAll)
  .post(
    authController.protect,
    authController.restrictTo(['admin', 'dev']),
    controller.createOne
  );

router.route('/all').get(controller.getAllNoPagination);
router
  .route('/delete-all')
  .delete(
    authController.protect,
    authController.restrictTo(['dev']),
    controller.deleteAll
  );

router
  .route('/:id')
  .get(controller.getOne)
  .patch(
    authController.protect,
    authController.restrictTo(['admin', 'dev']),
    controller.updateOne
  )
  .delete(
    authController.protect,
    authController.restrictTo(['admin', 'dev']),
    controller.deleteOne
  );

module.exports = router;
