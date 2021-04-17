const Joi = require("joi");
const schemas = {
  csrfExample: Joi.object({
    _csrf: Joi.string().required(),
  }),
  secretExample: Joi.object({
    _secret: Joi.string().required(),
  }),
};
module.exports = schemas;
