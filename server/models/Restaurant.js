// Require(s)
const { Model, DataTypes } = require("sequelize");
const db_conn = require("./database");

// Variable(s)
const table_name = "restaurant"; // Replace with the current needed table

/*
    Object: Restaurant
    Data(s): name, address, cuisine_type, note
*/
class Restaurant extends Model {}

Restaurant.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        cuisine_type: {
            type: DataTypes.INTEGER,
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
module.exports = Restaurant;