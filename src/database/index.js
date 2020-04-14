const Sequelize = require('sequelize');
const dbConfig = require('../config/database');
const UserModel = require('../app/models/UserModel');

const models = [UserModel];

const connection = new Sequelize(dbConfig);

models.forEach(model => {
  model.init(connection)
});

module.exports = connection;