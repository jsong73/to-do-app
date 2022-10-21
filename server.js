const express = require("express")
const app = express();
const sequelize = require("./config/connection")
const tasks = require("./models/Tasks")

//connect to the available port if not specified use port 3000
const PORT = process.env.PORT || 3000;

//to connect to port using express
sequelize.sync().then(() => {
    app.listen(PORT, (err) =>
    console.log(`listening to port ${PORT}`));
});