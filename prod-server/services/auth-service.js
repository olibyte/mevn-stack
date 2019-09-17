'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.generateJWT = generateJWT;

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function generateJWT(user) {
    var tokenData = { username: user.username, id: user._id };
    return _jsonwebtoken2.default.sign({ user: tokenData }, process.env.TOKEN_SECRET);
}