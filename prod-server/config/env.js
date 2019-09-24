'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setEnvironment = setEnvironment;

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Determines the current environment and sets the appropriate variables
 * @param {Express App} app 
 */
function setEnvironment(app) {
    if (!process.env.NODE_ENV || process.env.NODE_ENV.toString().trim() !== 'production') {
        setDevEnv(app);
    } else {
        setProdEnv(app);
    }
}

/**
 * Used to set development environment variables
 * @param {Express App} app 
 */
function setDevEnv(app) {
    process.env.NODE_ENV = 'development';
    app.use(_bodyParser2.default.json()); // Allows parsing JSON from the client
    app.use((0, _morgan2.default)('dev')); // Log HTTP Requests to the node console (for debugging purposes)
    app.use((0, _cors2.default)()); // Enable Cross Origin Requests, since Vue.JS is on a different origin
    process.env.DB_URL = 'mongodb://localhost:27017/vue-db';
    process.env.TOKEN_SECRET = '27946982a9a4408996607fe95a6299f9';
}

/**
 * Used to set production environment variables
 * @param {Express App} app 
 */
function setProdEnv(app) {
    process.env.NODE_ENV = 'production';
    process.env.DB_URL = 'mongodb+srv://ocben1:A6764febde@cluster0-4gk8e.mongodb.net/test?retryWrites=true&w=majority';
    process.env.TOKEN_SECRET = '9f4d50bfa6b2450a9ec766fc5104948e';
    app.use(_bodyParser2.default.json());
    app.use(_express2.default.static(__dirname + '/../../dist'));
}