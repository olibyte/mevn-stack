'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.registerRoutes = registerRoutes;

var _tasksRoutes = require('./api/task/tasks-routes');

var _tasksRoutes2 = _interopRequireDefault(_tasksRoutes);

var _registerRoutes = require('./api/register/register-routes');

var _registerRoutes2 = _interopRequireDefault(_registerRoutes);

var _userRoutes = require('./api/user/user-routes');

var _userRoutes2 = _interopRequireDefault(_userRoutes);

var _authRoutes = require('./api/auth/auth-routes');

var _authRoutes2 = _interopRequireDefault(_authRoutes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function registerRoutes(app) {
    app.use('/api', _tasksRoutes2.default);
    app.use('/api', _registerRoutes2.default);
    app.use('/api', _userRoutes2.default);
    app.use('/api', _authRoutes2.default);
}