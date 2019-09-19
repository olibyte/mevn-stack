'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _tasksController = require('./tasks-controller');

var controller = _interopRequireWildcard(_tasksController);

var _authService = require('../../services/auth-service');

var auth = _interopRequireWildcard(_authService);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();


router.post('/task', auth.requireLogin, controller.create);
router.get('/task', auth.requireLogin, controller.index);
router.get('/task/:id', auth.requireLogin, controller.show);
router.put('/task', auth.requireLogin, controller.update);
router.delete('/task/:id', auth.requireLogin, controller.remove);

exports.default = router;