const { Joi} = require('celebrate');

const SuppliersValidation = Joi.object().keys({
    Suppliers_details : Joi.string().required().trim().min(5).max(50),
}); 


module.exports = SuppliersValidation;