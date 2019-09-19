'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.index = index;
exports.create = create;
exports.update = update;
exports.remove = remove;
exports.show = show;

var _userModel = require('../../model/user-model');

var _userModel2 = _interopRequireDefault(_userModel);

var _taskModel = require('../../model/task-model');

var _taskModel2 = _interopRequireDefault(_taskModel);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _authService = require('../../services/auth-service');

var auth = _interopRequireWildcard(_authService);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function index(req, res) {
    // FIND ALL TASKS
    _taskModel2.default.find({}, function (error, tasks) {
        if (error) {
            return res.status(500).json();
        }
        return res.status(200).json({ tasks: tasks });
    }).populate('author', 'username', 'user');
    // Populate will find the author that created the task and add it to the task (username only)
}

function create(req, res) {
    var id = auth.getUserId(req);
    _userModel2.default.findOne({ _id: id }, function (error, user) {
        if (error && !user) {
            return res.status(500).json();
        }
        var task = new _taskModel2.default(req.body.task);
        task.author = user._id;
        task.dueDate = (0, _moment2.default)(task.dueDate);

        task.save(function (error) {
            if (error) {
                return res.status(500).json();
            }
            return res.status(201).json();
        });
    });
}

function update(req, res) {
    var id = auth.getUserId(req);

    _userModel2.default.findOne({ _id: id }, function (error, user) {
        if (error) {
            return res.status(500).json();
        }
        if (!user) {
            return res.status(404).json();
        }

        var task = new _taskModel2.default(req.body.task);
        task.author = user._id;
        task.dueDate = (0, _moment2.default)(task.dueDate); // Formats the due date to a proper date format
        _taskModel2.default.findByIdAndUpdate({ _id: task._id }, task, function (error) {
            if (error) {
                return res.status(500).json();
            }
            return res.status(204).json();
        });
    });
}

function remove(req, res) {
    var id = auth.getUserId(req);
    _taskModel2.default.findOne({ _id: req.params.id }, function (error, task) {
        if (error) {
            return res.status(500).json();
        }
        if (!task) {
            return res.status(404).json();
        }
        if (task.author._id.toString() !== id) {
            return res.status(403).json({ message: 'Not allowed to delete another user\'s task' });
        }
        _taskModel2.default.deleteOne({ _id: req.params.id }, function (error) {
            if (error) {
                return res.status(500).json();
            }
            return res.status(204).json();
        });
    });
}

function show(req, res) {
    // GET TASK BY ID
    _taskModel2.default.findOne({ _id: req.params.id }, function (error, task) {
        if (error) {
            return res.status(500).json();
        }
        if (!task) {
            return res.status(404).json();
        }
        return res.status(200).json({ task: task });
    });
}