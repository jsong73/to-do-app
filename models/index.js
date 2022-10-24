const Tasks = require("./Tasks");
const User = require("./User");
//connecting User.js to Task.js using foreign key - user_id is found in Task.js file
User.hasMany(Tasks, {
    foreignKey: "user_id",
    //deletes users tasks if user is deleted
    onDelete: "CASCADE",
});

Tasks.belongsTo(User, {
    foreignKey: "user_id",
});
//exporting the User and Task class 
module.exports = { User, Tasks }; 