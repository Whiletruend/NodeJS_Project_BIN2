// Require(s)
const { Model, DataTypes } = require("sequelize");
const db_conn = require("./database");

// Variable(s)
const table_name = "recipe"; // Replace with the current needed table

/*
    Object: Recipe
    Data(s): id, name, difficulty, ingredients, preparation_time, cooking_time, note
*/
class Recipe extends Model {}

Recipe.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        difficulty: {
            type: DataTypes.INTEGER,
            defaultValue: 1,
        },
        ingredients: DataTypes.STRING,
        preparation_time: DataTypes.INTEGER,
        cooking_time: DataTypes.INTEGER,
        note: {
            type: DataTypes.INTEGER,
            defaultValue: 1,
        },
    },
    {
        sequelize: db_conn,
        tableName: table_name,
    }
);

// Export(s)
module.exports = Recipe;