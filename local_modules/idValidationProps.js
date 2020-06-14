const { celebrate, Joi, errors } = require('celebrate');

const idValidationProps = {
  params: Joi.object().keys({
    userId: Joi.string().alphanum().length(24),
  }),
};

module.exports = idValidationProps;
