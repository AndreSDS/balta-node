'use strict'

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();
const mongoose = require('mongoose');

//conecta com banco de dados
mongoose.connect('mongodb://rammpk:caver45..@ds215172.mlab.com:15172/balta_node');

//carrega os models
const Product = require('./models/product');
const Customer = require('./models/customer');
const Order = require('./models/order');

//carrega as rotas
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');
const customerRoute = require('./routes/customer-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 
    extended: false 
}));

app.use('/', indexRoute);
app.use('/products', productRoute);
app.use('/customers', customerRoute);

module.exports = app;