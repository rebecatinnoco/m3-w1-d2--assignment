const express = require('express');
const path = require('path');
const auth = require('http-auth');
// const basic = auth.basic({
//     file: path.join(__dirname, './users.htpasswd'),
// }) 
const routes = require('./routes/index');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended:true }));
app.use('/', routes);
app.use(express.static('public'));

module.exports = app;