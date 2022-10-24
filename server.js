const express = require("express")
//calling the express variable to use express library
const app = express();
//importing the connection.js file
const sequelize = require("./config/connection")
//importing the models folder
const Model = require("./models");
//importing controllers folder
const controllers = require("./controllers")

//connect to the available port if not specified use port 3000
const PORT = process.env.PORT || 3000;

//if using POST request you need to use these two lines of code
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//use all /api content in controllers folder - everything coming from the controllers folder will have /api at the front so no need to repeatedly write /api with each get request
app.use("/api", controllers);

//to connect to port using express
//first parameter is the port number and second parameter is the callback function
sequelize.sync({force: false}).then(() => {
    app.listen(PORT, (err) =>
    console.log(`listening to port ${PORT}`));
});