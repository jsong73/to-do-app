//to start the server
const express = require("express")
//calling the express variable to use express library
//to start the server
const app = express();
const sequelize = require("./config/connection")
const tasks = require("./models/Tasks")

//connect to the available port if not specified use port 3000
//to start the server
const PORT = process.env.PORT || 3000;

//to connect to port using express
//first parameter is the port number and second parameter is the callback function
//to start the server
sequelize.sync().then(() => {
    app.listen(PORT, (err) =>
    console.log(`listening to port ${PORT}`));
});