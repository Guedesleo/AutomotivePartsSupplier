const { Joi} = require('celebrate');

const CarManufacturevalidation = Joi.object().keys({
    name : Joi.string().required().trim().min(3).max(50),
    fabricante_url : Joi.string().trim().required().min(10).max(50),
}); 


module.exports = CarManufacturevalidation;