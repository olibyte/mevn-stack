"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.index = index;
exports.create = create;
exports.update = update;
exports.remove = remove;
exports.show = show;
function index(req, res) {
    //FIND ALL TASKS
    return res.status(200).json();
}
function create(req, res) {
    //CREATE TASK
    return res.status(201).json(); //201 whenever we create
}
function update(req, res) {
    //UPDATE TASK
    return res.status(204).json(); //204 since we're not getting anything back
}
function remove(req, res) {
    //DELETE A TASK
    return res.status(204).json();
}
function show(req, res) {
    //GET TASK BY ID
    return res.status(200).json();
}