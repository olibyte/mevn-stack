'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _tasksController = require('./tasks-controller');

var controller = _interopRequireWildcard(_tasksController);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();


router.post('/task', controller.create);
router.get('/task', controller.index);
router.get('/task/:id', controller.show);
router.put('/task', controller.update);
router.delete('/task', controller.remove);

exports.default = router;