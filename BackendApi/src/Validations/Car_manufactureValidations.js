const { Joi} = require('celebrate');

const CarManufacturevalidation = Joi.object().keys({
    name_fabricante : Joi.string().required().trim().min(3).max(50),
}); 


module.exports = CarManufacturevalidation;