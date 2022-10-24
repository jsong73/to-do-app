const Task = require("./Tasks");
const User = require("./User");
//connecting User.js to Task.js using foreign key - user_id is found in Task.js file
User.hasMany(Task, {
    foreignKey: "user_id",
    //deletes users tasks if user is deleted
    onDelete: "CASCADE",
});

Task.belongsTo(User, {
    foreignKey: "user_id",
});
//exporting the User and Task class 
module.exports = { User, Task }; 