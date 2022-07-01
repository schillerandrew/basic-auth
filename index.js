'use strict';

// make sure our tables are created, start up the HTTP server.

const { start } = require('./src/server.js');
const { sequelize } = require('./src/auth/models/');

sequelize.sync()
  .then(() => console.log('server up'))
  .catch(e => console.error('Could not start server', e.message));

start();