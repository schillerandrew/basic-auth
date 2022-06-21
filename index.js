'use strict';

// make sure our tables are created, start up the HTTP server.

let { start, sequelize } = require('./src/server.js');

sequelize.sync()
  .then(() => console.log('server up'))
  .catch(e => console.error('Could not start server', e.message));

  start();