// Variable(s)
const { connection } = require("./models");

// Migrate
connection
    .sync({
        alter: true,
    })
    .then(() => console.log("DB Migrated"))
    .then(() => models.close())