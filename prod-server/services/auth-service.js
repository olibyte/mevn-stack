"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.generateJWT = generateJWT;
function generateJWT(user) {
    var tokenData = { username: user.username, id: user._id };
}