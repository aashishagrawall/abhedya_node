const Joi = require('joi');
const { password, objectId } = require('./custom.validation');

const createCategory = {
    body: Joi.object().keys({
        name: Joi.string().required(),
        facts: Joi.string().required(),
        details: Joi.string().required(),
        image: Joi.string()
    }),
};
const createChallenge = {
    body: Joi.object().keys({
        name: Joi.string().required(),
        challenge: Joi.string().required(),
        value: Joi.string().required(),
        category:Joi.string().required()
    }),
};

module.exports = {
    createCategory,
    createChallenge
};
