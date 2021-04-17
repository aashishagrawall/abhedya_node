const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const categoryValidation = require('../../validations/category.validation');
const categoryController = require('../../controllers/category.controller');

const router = express.Router();

router
  .route('/')
  .post(auth('createCategory'), validate(categoryValidation.createCategory), categoryController.createCategory)
  .get(auth('getCategories'), categoryController.getCategories);
  router
  .route('/challenge')
  .post(auth('createChallenge'), validate(categoryValidation.createChallenge), categoryController.createChallenge)



module.exports = router;
