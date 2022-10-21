const Sequelize = require("sequelize");
//connecting to dotenv library to hide database info
require("dotenv").config();
//creating the Sequelize class - class contain two parameters that are both objects
//first parameter is the database login info and second parameter is database port info
const sequelize = new Sequelize(
process.env.DB_NAME,
process.env.DB_USER,
process.env.DB_PASSWORD,
{
host: "localhost",
dialect: "mysql",
port: 3306
}
);

//exporting all the objects in the variable sequelize
module.exports = sequelize;