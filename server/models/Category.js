// Require(s)
const { Model, DataTypes } = require("sequelize");
const db_conn = require("./database");

// Variable(s)
const table_name = "category"; // Replace with the current needed table

/*
    Object: Category
    Data(s): name, note
*/
class Category extends Model {}

Category.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        note: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
    },
    {
        sequelize: db_conn,
        tableName: table_name,
    }
);

// Export(s)
module.exports = Category;