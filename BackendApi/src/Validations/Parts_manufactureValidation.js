const { Joi} = require('celebrate');

const PartsManufacturevalidation = Joi.object().keys({
    Nome_do_fabricante : Joi.string().required().trim().min(3).max(50),
}); 


module.exports = PartsManufacturevalidation;