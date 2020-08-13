const { Joi} = require('celebrate');

const Parts_levelsvalidation = Joi.object().keys({
    Description_Levels : Joi.string().required().trim().min(5).max(50),
}); 


module.exports = Parts_levelsvalidation;