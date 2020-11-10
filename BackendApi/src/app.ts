// const express = require('express');
// const routes = require('./router');
//  const cors = require('cors');
// const nunjucks = require('nunjucks')
// const methodOverride = require('method-override');
// const {errors} = require ('celebrate');

import express from 'express';
import routes from './router';
import nunjucks from 'nunjucks';
import cors from 'cors';
import methodOverride from 'method-override';
import {errors} from 'celebrate';
import path from 'path';

const app = express();
app.use(cors({
    //origin: 'http://habilitarquempode'
}));
app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use(routes);
app.use(express.static('public'))
app.use(methodOverride('_method'))

app.use('/uploads', express.static(path.resolve(__dirname ,'..','uploads')))

app.set("view engine","html")

nunjucks.configure("src/app/view",{
    express: app,
    autoescape: false,
    noCache: true
})

app.use(errors());

export default app;

