'use strict';

var express = require('express');
var dbConfig = require('./configs/db');
var mongoose = require('mongoose');

// Database connection
mongoose.connect(dbConfig[process.env.NODE_ENV].url);

// Close the database connection when Node process ends. 
process.on('SIGINT', function() {  
  mongoose.connection.close(function () { 
    process.exit(0); 
  }); 
});

var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

var routes = require('./routes/index');
app.use('/', routes);

module.exports = app;
