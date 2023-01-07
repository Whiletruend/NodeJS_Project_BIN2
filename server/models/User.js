// Requires
const { Model, DataTypes } = require("sequelize");
const db_conn = require("./database");
const bcrypt = require("bcryptjs");

// Variables
const table_name = "user";

/*
    Object: User
    Data(s): firstname, lastname, password, is_admin, phone_number
*/
class User extends Model {}

User.init(
    {
        lastname: DataTypes.STRING,
        firstname: DataTypes.STRING,
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1],
            },
        },
        is_admin: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        phone_number: DataTypes.STRING,
    },
    {
        sequelize: db_conn,
        tableName: table_name,
    }
);

// Fonction hash password
function hashPassword(user) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync());
}

// Hooks

User.addHook("beforeCreate", hashPassword);
User.addHook("beforeUpdate", (user, { fields }) => {
    if (fields.includes("password")) {
        hashPassword(user);
    }
});

// Export
module.exports = User;