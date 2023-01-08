// Require(s)
const express = require("express");
const checkRequestFormat = require("./middlewares/checkRequestFormat");
const errorHandler = require("./middlewares/errorHandler");
require("./models/database");

// Route(s) require(s)
const index_Route = require("./routes/index");
const recipe_Route = require("./routes/recipe");
const user_Route = require("./routes/user");
const login_Route = require("./routes/login");

// Variable(s)
const PORT = process.env.PORT || 3000; // Default: 3000 (use the process.env.PORT else use 3000 by default)
const app = express();

// Use(s)
app.use(checkRequestFormat);
app.use(express.json());

app.use(index_Route);
app.use(recipe_Route);
app.use(login_Route);
app.use(user_Route);

app.use(errorHandler);

// Listener
app.listen(PORT, () => {
    console.log(
        "Server is listening on port "
        + PORT + "\n" +
        "Server URL: http://localhost:" + PORT
    );
});

