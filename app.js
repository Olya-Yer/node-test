var express = require('express');
var app = express();

var DeviceController = require('./DeviceController');

app.use('/getId', DeviceController);

module.exports = app;

