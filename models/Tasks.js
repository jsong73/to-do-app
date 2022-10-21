const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection")

//class is child and model is parent
class Tasks extends Model {}

Tasks.init(
    { 
        id: { 
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
        title: {
        type: DataTypes.STRING
    }, 
        text:{
        type: DataTypes.STRING 
    },
        completed:{
        type: DataTypes.BOOLEAN
    }
    },
    {
        sequelize,
        //creates timestamp when data was made
        timestamps: true,
        //freezes the table name
        freezeTableName: true,
        underscored: true,
        modelName: "Task"
    }   
);
//exporting class
module.exports = Tasks;







