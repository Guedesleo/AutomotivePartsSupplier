const express = require('express');
const routes = express.Router();
const { celebrate, Segments, Joi} = require('celebrate');

const Car_Manufactures = require('../src/Controllers/Car_Manufactures')
const Cars = require('../src/Controllers/Cars')

// Validations 
const Cars_Manufactures = require('./Validations/Car_manufactureValidations');
const Cars_Validation = require('./Validations/Cars_Validation');
const IdValidation = require('./Validations/Id_Validadion')


//Cars manufacture
routes.get('/carAuto/get',Car_Manufactures.index)

routes.post('/carAuto',celebrate({
     [Segments.BODY] : Cars_Manufactures,
 }),Car_Manufactures.post)


routes.put('/carAuto/:id',celebrate({
    [Segments.PARAMS] :IdValidation,
   [Segments.BODY] : Cars_Manufactures
}), Car_Manufactures.update)


routes.delete('/carAuto/:id',celebrate({
   [Segments.PARAMS] :IdValidation
}),Car_Manufactures.delete)

//Cars
routes.get('/Cars',Cars.index)
routes.post('/Cars',celebrate({
    [Segments.BODY] : Cars_Validation,

}),Cars.create)
routes.put('/Cars/:id',celebrate({
    [Segments.PARAMS] :IdValidation,
    [Segments.BODY] : Cars_Validation,
}),Cars.update)

routes.delete('/Cars/:id',celebrate({
    [Segments.PARAMS] :IdValidation
}),Cars.delete)



module.exports = routes;



