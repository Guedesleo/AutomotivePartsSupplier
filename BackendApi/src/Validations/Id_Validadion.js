
const { Joi} = require('celebrate');

const IdValidation = Joi.object().keys({
    id: Joi.number().required()
}); 

module.exports = IdValidation;