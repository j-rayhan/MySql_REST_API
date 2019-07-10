'use strict'

let mysql = require('mysql');
const config = require('./config');

const connection = mysql.createConnection({
    host: config.DB_HOST,
    user: config.DB_USER,
    password: config.DB_PASSWORD,
    database: config.DB
});

connection.connect(err => {
    if (err) throw err;
})

module.exports = connection;

// Server: remotemysql.com
