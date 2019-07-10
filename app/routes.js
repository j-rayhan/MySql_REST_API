'use strict'

const { ToDo } = require('./controller');

module.exports = (app) => {

    app.route('/todo')
        .get(ToDo.list_all)
        .post(ToDo.createNew);

    app.route('/todo/:id')
        .get(ToDo.read)
        .post(ToDo.update)
        .delete(ToDo.remove);
}
