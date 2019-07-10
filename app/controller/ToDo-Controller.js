'use strict'
const { Todo } = require('../model');

const list_all = (req, res) => {
    Todo.getAll(function (err, task) {

        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', task);
        res.send(task);
    });
};

const createNew = (req, res) => {
    let newTask = new Todo(req.body);
    // handles null or error
    if (!newTask.task || !newTask.status) {
        res.status(400).send({ error: true, message: "Please provide task/status" })
    } else {
        Todo.createTodo(newTask, (err, task) => {
            if (err) res.send(err);
            res.json(task);
        })
    }
}

const read = (req, res) => {
    Todo.getById(req.params.id, (err, task) => {
        if (err)
            res.send(err);
        res.json(task);
    });
};

const update = (req, res) => {
    let updateTask = new Todo(req.body);
    Todo.updateById(req.params.id, updateTask, (err, task) => {
        if (err)
            res.send(err);
        res.json(task);
    });
};

const remove = (req, res) => {
    console.log('PRINT IN %s=====>', 'delete', req.body);
    Todo.deleteById(req.params.id, (err, task) => {
        if (err)
            res.send(err);
        res.json(task);
    });
};

module.exports = {
    createNew,
    read,
    update,
    remove,
    list_all
}
