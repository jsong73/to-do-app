//object destructuring 
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

//class is child and model is parent
class User extends Model {}
//will always need a class and extends when using init with sequelize
User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        username:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },            
        email:{
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                isEmail: true,
            }
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
            //first parameter is min length pw can have and you can add second number for max length
                len:[8],
            },
        },
    },
{
    //connecting to sequelize database
    sequelize,
    //create two columns - one for when you made the column and one for when you updated column
    timestamps: true,
    //By default, without true, table will be called users
    freezeTableName: true,
    //camel casing
    userscored: true,
    modelName: "user",
}
);
//exporting class User
module.exports = User;