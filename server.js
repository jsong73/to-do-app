const express = require("express")
//calling the express variable to use express library
const app = express();
//importing the connection.js file
const sequelize = require("./config/connection")
//importing the models folder
const Model = require("./models");

//connect to the available port if not specified use port 3000
const PORT = process.env.PORT || 3000;

//if using POST request you need to use these two lines of code
app.use(express.json());
app.use(express.urlencoded({extended: true}));


//to connect to port using express
//first parameter is the port number and second parameter is the callback function
sequelize.sync({force: true}).then(() => {
    app.listen(PORT, (err) =>
    console.log(`listening to port ${PORT}`));
});