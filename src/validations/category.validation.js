const Joi = require('joi');
const { password, objectId } = require('./custom.validation');

const createCategory = {
    body: Joi.object().keys({
        name: Joi.string().required(),
        facts: Joi.string().required(),
        description: Joi.string().required(),
        image: Joi.string().required()
    }),
};

module.exports = {
    createCategory,
};
