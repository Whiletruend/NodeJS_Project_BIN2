// Base require(s)
const database = require("./database");

// Object(s) require(s)
const Recipe = require("./Recipe");
const User = require("./User");
const Restaurant = require("./Restaurant");
const Category = require("./Category");

// Export(s)
module.exports = {
    database,
    Recipe,
    User,
    Restaurant,
    Category
};

