//model for user
const { DataTypes } = require("sequelize");
const connection = require("../db/connection");

const User = connection.define(
  "User",
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    EmailId: {
      type: DataTypes.INTEGER,
    },
  },

  { indexes: [{ unique: true, fields: ["username", "email"] }] }
);

module.exports = User;
