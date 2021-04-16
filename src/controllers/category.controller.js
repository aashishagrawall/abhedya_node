const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const Category = require('../models/Category')
const { userService } = require('../services');

const createCategory = catchAsync(async (req, res) => {
    try {

        const exist = await Category.findOne({ name: req.body.name })
        if (exist) {
            res.status(409).send({ success: false, message: "Category already exist" })
        }
        const categoryModel = new Category(req.body);
        const category = await categoryModel.save()
        res.status(httpStatus.CREATED).send({ success: true, category: category });
    } catch (err) {
        res.status(400).send({ success: false, message: err.message })
        console.log("err", err)
    }


});

const getCategories = catchAsync(async (req, res) => {


    try {

        const categories = await Category.find({})
        res.status(200).send({ success: true, categories: categories });

    } catch (err) {
        res.status(400).send({ success: false, message: err.message })
        console.log("err", err)

    }
});

// const getUser = catchAsync(async (req, res) => {
//   const user = await userService.getUserById(req.params.userId);
//   if (!user) {
//     throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
//   }
//   res.send(user);
// });

// const updateUser = catchAsync(async (req, res) => {
//   const user = await userService.updateUserById(req.params.userId, req.body);
//   res.send(user);
// });

// const deleteUser = catchAsync(async (req, res) => {
//   await userService.deleteUserById(req.params.userId);
//   res.status(httpStatus.NO_CONTENT).send();
// });

module.exports = {
    createCategory,
    getCategories,

};
