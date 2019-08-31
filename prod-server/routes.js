'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.registerRoutes = registerRoutes;

var _tasksRoutes = require('./api/task/tasks-routes');

var _tasksRoutes2 = _interopRequireDefault(_tasksRoutes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function registerRoutes(app) {
    app.use('/api', _tasksRoutes2.default);
}