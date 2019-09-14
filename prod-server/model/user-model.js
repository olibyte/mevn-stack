'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _stringUtil = require('../utilities/string-util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var userSchema = new _mongoose2.default.Schema({
    username: String,
    first: String,
    last: String,
    password: String
});
userSchema.set('timestamps', true);
userSchema.virtual('fullName').get(function () {
    var first = _stringUtil.StringUtil.capitalize(this.first.toLowerCase());
    var last = _stringUtil.StringUtil.capitalize(this.last.toLowerCase());
    return first + ' ' + last;
});
userSchema.pre('save', function (next) {
    this.username = this.username.toLowerCase(); //convert all to lowercase for consistency in db
    this.first = this.first.toLowerCase();
    this.last = this.last.toLowerCase();
    next(); //continue saving the user
});

exports.default = _mongoose2.default.model('user', userSchema);