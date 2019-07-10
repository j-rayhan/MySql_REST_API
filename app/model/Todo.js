'user strict';
const sql = require('../db');

let Todo = function (task) {
    this.task = task.task;
    this.status = task.status;
    this.created_at = new Date();
};

Todo.getAll = (result) => {
    sql.query("Select * from tasks", function (err, res) {

        if (err) {
            console.error("error: ", err);
            result(null, err);
        }
        else {
            console.log('All tasks : ', res);
            result(null, res);
        }
    });
};

Todo.createTodo = (todo, result) => {
    sql.query("INSERT INTO tasks set ?", todo, (err, res) => {

        if (err) {
            console.error("error: ", err);
            result(err, null);
        }
        else {
            console.log("new task: ", res);
            result(null, res);
        }
    });
}

Todo.getById = (id, result) => {
    sql.query("Select * from tasks where id = ? ", id, (err, res) => {
        if (err) {
            console.error("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};

Todo.updateById = (id, task, result) => {
    sql.query("UPDATE tasks SET task = ? WHERE id = ?", [task.task, id], (err, res) => {
        if (err) {
            console.error("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};

Todo.deleteById = (id, result) => {
    sql.query("DELETE FROM tasks WHERE id = ?", [id], (err, res) => {
        if (err) {
            console.error("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};

module.exports = Todo;
