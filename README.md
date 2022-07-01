# basic-auth

> Author: Andrew Schiller

> ## Problem Domain

Deploy an Express server that implements Basic Authentication, with signup and signin capabilities, using a Postgres database for storage.

> ## Getting Started

> ### Standard dependencies

- express, supertest, jest, cors, dotenv

> ### SQL-specific dependencies

- sequelize, sequelize-cli, pg, sqlite3

> ### Auth dependencies

- base-64, bcrypt

> ### >>> **Important setup** <<<

- To enable a test environment, go into the `package.json` file and insert `NODE_ENV=test ` at the start of the `test` value (in front of `jest --verbose --coverage`), which is in `scripts`.

> ## Links

- [GitHub pull request](https://github.com/schillerandrew/basic-auth/pull/1)
- [GitHub actions](https://github.com/schillerandrew/basic-auth/actions)
- [Heroku app](https://schiller-lab6-basic-auth.herokuapp.com/)

> ## Architecture

- **runtime:** Node
- **server:** Express
- **database:** PostgreSQL
- **deployment:** Heroku
