//Email model
const { DataTypes } = require("sequelize");
const connection = require("../db/connection");
//created model for Email 
const Email = connection.define("Email", {
  emailName: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

module.exports = Email;
