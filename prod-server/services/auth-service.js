'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.generateJWT = generateJWT;
exports.requireLogin = requireLogin;
exports.decodeToken = decodeToken;
exports.getUsername = getUsername;
exports.getUserId = getUserId;

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function generateJWT(user) {
    var tokenData = { username: user.username, id: user._id };
    return _jsonwebtoken2.default.sign({ user: tokenData }, process.env.TOKEN_SECRET);
} /**
   * Used to perform all authentication-related operations
   * For example, generating a token, getting the username, etc.
   */

function requireLogin(req, res, next) {
    var token = decodeToken(req);
    if (!token) {
        return res.status(401).json({ message: 'You must be logged in.' });
    }
    next();
}

/**
 * Will verify that the token came from this application (using secret). Then,
 * will decode it and grab the signed data (username, etc.) and return decoded token
 * @param {HTTP Request} req 
 */
function decodeToken(req) {
    var token = req.headers.authorization || req.headers['authorization'];

    if (!token) {
        return null;
    }

    try {
        return _jsonwebtoken2.default.verify(token, process.env.TOKEN_SECRET);
    } catch (error) {
        return null;
    }
}

function getUsername(req) {
    var token = decodeToken(req);
    if (!token) {
        return null;
    }
    return token.user.username;
}

function getUserId(req) {
    var token = decodeToken(req);
    if (!token) {
        return null;
    }
    return token.user.id;
}