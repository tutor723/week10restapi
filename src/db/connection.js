const { Sequelize } = require("sequelize")
//Connect to database via connection string
const connection = new Sequelize(process.env.connection, {
    dialect: 'mysql'
})    

connection.authenticate()
//check if database connected or not
console.log("DB is working")

module.exports = connection