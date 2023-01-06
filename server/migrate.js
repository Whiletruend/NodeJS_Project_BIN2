// Variable(s)
const { models } = require("./models");

// Migrate
models.sync({
    alter: true,
})
.then(() => console.log("DB Migrated"))
.then(() => models.close());