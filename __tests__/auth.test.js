'use strict';

const { server } = require('../src/server');
const { sequelize } = require('../src/auth/models/') // ?? GOOD PATH ???
const base64 = require('base-64');
const supertest = require('supertest');
const request = supertest(server);

beforeAll(async () => {
  await sequelize.sync();
});
afterAll(async () => {
  await sequelize.drop();
});

