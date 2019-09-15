import User from '../../model/user-model';
import Task from '../../model/task-model';
import taskModel from '../../model/task-model';
import moment from 'moment';

export function index(req, res) {
    //FIND ALL TASKS
    Task.find({}, (error, tasks) => {
        if (error) {
            return res.status(500).json();
        }
        return res.status(200).json({ tasks: tasks});
    }).populate('author', 'username', 'user');
    return res.status(200).json();
}

export function create(req,res) {
    //CREATE TASK
    const id = 10;
    User.findOne({ _id: id}, (error, user) => {
        if(error && !user) {
            return res.status(500).json();
        }
        const task = new Task(req.body.task);
        task.author = user._id;
        task.dueDate = moment(task.dueDate);

        task.save(error => {
            if (error) {
                return res.status(500).json();
            }
            return res.status(201).json();
        });
    });
}
export function update(req,res) {
    //UPDATE TASK
    return res.status(204).json(); //204 since we're not getting anything back
}
export function remove(req,res) {
    //DELETE A TASK
    return res.status(204).json();
}
export function show(req,res) {
    //GET TASK BY  ID
    Task.findOne({ _id: req.params.id}, (error, tasks) => { 
        if(error) {
            return res.status(500).json();
        }
        if(!task) {
            return res.status(404).json(); 
        }
        return res.status(200).json({ task: task });
    });
    return res.status(200).json();
}