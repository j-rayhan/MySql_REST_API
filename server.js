const express = require('express');
const bodyParser = require('body-parser');
const routers = require('./app/routes');
const config = require('./app/config');

app = express(),
port = config.PORT || 3000

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(port);
routers(app);
console.log('todo list RESTful API server started successfully on:' + port);
