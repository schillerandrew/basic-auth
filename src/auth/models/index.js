'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const UsersModel = require('./users');

const DATABASE_URL = process.env.NODE_ENV === 'test'
  ? 'sqlite::memory'
  : process.env.DATABASE_URL || 'postgres://localhost:5432/api-server';

const sequelize = new Sequelize(DATABASE_URL);

module.exports = {
  sequelize,
  Users: UsersModel(sequelize, DataTypes),
};