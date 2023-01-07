// Require(s)
const express = require("express");
const recipe_Route = require("./routes/recipe");
const user_Route = require("./routes/user");
require("./models/database");

// Variable(s)
const PORT = process.env.PORT || 3000; // Default: 3000 (use the process.env.PORT else use 3000 by default)
const app = express();

// Use(s)
app.use(express.json());

app.use(recipe_Route);
app.use(user_Route);

app.get("/", function (req, res) {
    res.send("Bienvenue sur RecettesDuMonde !");
});

// Listener
app.listen(PORT, () => {
    console.log(
        "Server is listening on port "
        + PORT + "\n" +
        "Server URL: http://localhost:" + PORT
    );
});

