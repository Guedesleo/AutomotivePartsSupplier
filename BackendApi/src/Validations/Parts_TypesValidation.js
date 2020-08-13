const { Joi} = require('celebrate');

const Parts_TypesValidation = Joi.object().keys({
    Description_Types : Joi.string().required().trim().min(5).max(50),
}); 


module.exports = Parts_TypesValidation;