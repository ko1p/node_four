const validator = require('validator');
const BadRequest = require('../errors/badRequest');

const urlValidation = (value) => {
  if (!validator.isURL(value, { protocols: ['http', 'https'], require_protocol: true })) {
    throw new BadRequest('the entered URL is incorrect');
  }
  return value;
};

module.exports = urlValidation;
