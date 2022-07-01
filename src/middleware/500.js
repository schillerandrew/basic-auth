'use strict';

function error505Handler (err, req, res, next) {
  const error = err.message ? err.message : err;
  res.status(500).send(error);
}

module.exports = error505Handler;