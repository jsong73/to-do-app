const express = require("express")
const app = express();
const tasks = require("./models/Tasks")
const sequelize = require("./config/connection")

const PORT = process.env.PORT || 3000;


sequelize.sync().then(() => {
    app.listen(PORT, (err) =>
    console.log(`listening to port ${PORT}`));
});