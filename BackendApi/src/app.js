const express = require('express');
const routes = require('./router');
const cors = require('cors');
const nunjucks = require('nunjucks')
const methodOverride = require('method-override')


const app = express();
app.use(cors({
    //origin: 'http://habilitarquempode'
}));
app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use(routes);
app.use(express.static('public'))
app.use(methodOverride('_method'))

app.set("view engine","html")

nunjucks.configure("src/app/view",{
    express: app,
    autoescape: false,
    noCache: true
})


module.exports = app;

