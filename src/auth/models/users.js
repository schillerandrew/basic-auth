'use strict';

const bcrypt = require('bcrypt');

// Create a Sequelize model
const UsersModel = (sequelize, DataTypes) => {
  const users = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  // NEEDS A TRY CATCH
  users.authenticateBasic = async function (username, password) {
    const user = await this.findOne({where: { username } });
    const valid = await bcrypt.compare(password, user.password);
    if (valid) {
      return user;
    }
  };
  return users;
};

module.exports = UsersModel;