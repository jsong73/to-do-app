const Sequelize = require("sequelize");
//connecting to dotenv library to hide database info
require("dotenv").config();
//the new keyword creates an OBJECT from a CLASS (class = sequelize)
//creating the Sequelize class - class contain two parameters that are both objects
//first parameter is the database login info and second parameter is database port info
const sequelize = new Sequelize(
//path to the .env file so that info is hidden in .env file
process.env.DB_NAME,
process.env.DB_USER,
process.env.DB_PASSWORD,
{
host: "localhost",
dialect: "mysql",
//PORT # that mysql installs from the internet. database port # and server # differ
port: 3306
}
);

//exporting all the objects in the variable sequelize
module.exports = sequelize;