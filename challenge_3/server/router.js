const express = require('express');
const router = express.Router();
const controller = require('./controller.js');

router
  .route('/checkout')
  .post(controller.post)
  .put(controller.update);

module.exports = router;