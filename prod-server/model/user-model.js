'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _stringUtil = require('../utilities/string-util');

var _bcryptNodejs = require('bcrypt-nodejs');

var _bcryptNodejs2 = _interopRequireDefault(_bcryptNodejs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var userSchema = new _mongoose2.default.Schema({
    username: String,
    first: String,
    last: String,
    password: String
});
userSchema.set('timestamps', true);

// Returns a transient field client-side without actually adding it to the schema
userSchema.virtual('fullName').get(function () {
    var first = _stringUtil.StringUtil.capitalize(this.first.toLowerCase());
    var last = _stringUtil.StringUtil.capitalize(this.last.toLowerCase());
    return first + ' ' + last;
});

// Static methods that can be called from anywhere (e.g., User.passwordMatches)
userSchema.statics.passwordMatches = function (password, hash) {
    return _bcryptNodejs2.default.compareSync(password, hash);
};
// Runs validation before saving a user
userSchema.pre('save', function (next) {
    this.username = this.username.toLowerCase();
    this.first = this.first.toLowerCase();
    this.last = this.last.toLowerCase();
    var unsafePassword = this.password;
    this.password = _bcryptNodejs2.default.hashSync(unsafePassword); // Will encrypt the user's password
    next();
});

exports.default = _mongoose2.default.model('user', userSchema);