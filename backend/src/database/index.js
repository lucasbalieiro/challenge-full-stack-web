const Sequelize = require('sequelize');

const dbConfig = require('../config/database');
const Student = require('../models/Student');

const dbConnection = new Sequelize(dbConfig);

Student.init(dbConnection);

module.exports = dbConnection;
