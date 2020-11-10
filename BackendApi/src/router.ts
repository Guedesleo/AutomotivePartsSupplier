// const express =require('express');
// const multer = require('multer');
// const multerConfig = require('./config/multer');
// const { celebrate, Segments, Joi} = require('celebrate');
// const Car_Manufactures = require('./Controllers/Car_Manufactures')
import express from 'express';
import {celebrate , Segments,Joi} from'celebrate';
import multer from 'multer';
import multerConfig from './config/multer';
import Car_Manufactures from './Controllers/Car_Manufactures';


const Cars = require('./Controllers/Cars')
const Parts_Manufactures = require ('./Controllers/Parts_Manufacture');
const Parts_levels = require ('./Controllers/Parts_levels');
const Parts_Types = require("./Controllers/Parts_Types");
const Suppliers = require('./Controllers/Suppliers');
const Parts = require('./Controllers/Parts');

// Validations 
const Cars_Manufactures = require('./Validations/Car_manufactureValidations');
const Cars_Validation = require('./Validations/Cars_Validation');
const IdValidation = require('./Validations/Id_Validadion');
const Parts_manufactureValidation = require('./Validations/Parts_manufactureValidation');
const Parts_levelsValidation = require('./Validations/Parts_levelsvalidation');
const Parts_typesValidation = require ('./Validations/Parts_TypesValidation');
const SuppliersValidation = require ('./Validations/Suppliers');


const routes = express.Router();
const upload = multer(multerConfig);

//Cars manufacture
routes.get('/carAuto/get',Car_Manufactures.index)

routes.get('/carAuto/get/:id',celebrate({
    [Segments.PARAMS] :IdValidation
 }),Car_Manufactures.show)

routes.post('/carAuto',upload.single('fabricante_url'),celebrate({
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

routes.get('/Cars/:id',celebrate({
    [Segments.PARAMS] :IdValidation
 }),Cars.show)

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

//Parts Manufactures
routes.get('/parts-manfacture',Parts_Manufactures.index);

routes.get('/parts-manfacture/:id',celebrate({
    [Segments.PARAMS] :IdValidation
 }),Parts_Manufactures.show)

routes.post('/create-parts-manfacture',celebrate({
    [Segments.BODY] : Parts_manufactureValidation,
}),Parts_Manufactures.post);

routes.put('/parts-manfacture/:id',celebrate({
    [Segments.PARAMS] :IdValidation,
    [Segments.BODY] : Parts_manufactureValidation,
}),Parts_Manufactures.update)

routes.delete('/parts-manfacture/:id',celebrate({
    [Segments.PARAMS] :IdValidation,
}),Parts_Manufactures.delete)

//Parts Levels
routes.get('/parts-levels',Parts_levels.index);

routes.get('/parts-levels/:id',celebrate({
    [Segments.PARAMS] :IdValidation
 }),Parts_levels.show)

routes.post ('/create-parts-levels',celebrate({
    [Segments.BODY] : Parts_levelsValidation,
}),Parts_levels.post)

routes.put ('/parts-levels/:id',celebrate({
    [Segments.BODY] : Parts_levelsValidation,
    [Segments.PARAMS] :IdValidation,
}),Parts_levels.update)

routes.delete ('/parts-levels/:id',celebrate({
    [Segments.PARAMS] :IdValidation,
}),Parts_levels.delete)

//Parts_types
routes.get('/parts-types',Parts_Types.index);

routes.get('/parts-types/:id',celebrate({
    [Segments.PARAMS] :IdValidation
 }),Parts_Types.show)

routes.post ('/create-parts-types',celebrate({
    [Segments.BODY] : Parts_typesValidation,
}),Parts_Types.post)

routes.put ('/parts-types/:id',celebrate({
    [Segments.BODY] : Parts_typesValidation,
    [Segments.PARAMS] :IdValidation,
}),Parts_Types.update)

routes.delete ('/parts-types/:id',celebrate({
    [Segments.PARAMS] :IdValidation,
}),Parts_Types.delete)

//Suppliers
routes.get('/suppliers',Suppliers.index);

routes.get('/suppliers/:id',celebrate({
    [Segments.PARAMS] :IdValidation
 }),Suppliers.show)

routes.post ('/create-suppliers',celebrate({
    [Segments.BODY] : SuppliersValidation,
}),Suppliers.post)

routes.put ('/suppliers/:id',celebrate({
    [Segments.BODY] : SuppliersValidation,
    [Segments.PARAMS] :IdValidation,
}),Suppliers.update)

routes.delete ('/suppliers/:id',celebrate({
    [Segments.PARAMS] :IdValidation,
}),Suppliers.delete)


//Parts 
routes.get('/parts',Parts.index);

 routes.get('/parts/:id',celebrate({
     [Segments.PARAMS] :IdValidation
 }),Parts.show)

// routes.post('/create-parts',Parts.post)

export default routes;



