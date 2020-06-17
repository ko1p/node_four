const { Joi } = require('celebrate');

const idValidationProps = {
  params: Joi.object().keys({
    id: Joi.string().alphanum().length(24),
  }),
};

module.exports = idValidationProps;
