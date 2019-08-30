'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)(); //nodemon is a tool that helps develop node.js based applications by automatically restarting the node 
//application when file changes in the directory are detected.
//const express = require('express')

var port = 3000;

app.get('/', function (req, res) {
  return res.send('Hello World!');
});

app.listen(port, function () {
  return console.log('Oliver\'s MEVN app listening on port ' + port + '!');
});