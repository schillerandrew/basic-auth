'use strict';

const { server } = require('../src/server');
const { sequelize } = require('../src/auth/models/');
const base64 = require('base-64');
const supertest = require('supertest');
const request = supertest(server);

beforeAll(async () => {
  await sequelize.sync();
});
afterAll(async () => {
  await sequelize.drop();
});

describe('Auth testing', () => {

  test('POST to /signup to create a new user', async () => {
    let response = await request.post('/signup').send({
      username: 'andrew',
      password: 'test123',
    });


    expect(response.status).toEqual(201);
    expect(response.body.username).toEqual('andrew');
    expect(response.body.password).not.toEqual('test123');
    expect(response.body.password).toBeTruthy();
  });

  test('POST to /signin to login as a user (use basic auth)', async () => {
    let authStr = 'andrew:test123';
    let encodedStr = base64.encode(authStr);
    let response = await request.post('/signin').set('Authorization', `Basic ${encodedStr}`);

    expect(response.status).toEqual(200);
    expect(response.body.username).toEqual('andrew');
  });

});