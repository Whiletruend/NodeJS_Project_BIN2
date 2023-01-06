// Variable(s)
const { Router } = require("express");
const { Recipe } = require("../models");
const router = new Router(); // Create the object "router"
const route_path = "/recipe" // Which route it'll be

/*
    Purpose: Get & show the page from the route "recipe"
    Method: GET
*/
router.get(route_path, (req, res) => {
    res.send("Page concernant les recettes");
});

/*
    Purpose: Get a specific recipe based on ID
    Method: GET
*/
router.get(route_path + "/:id", async (req, res) => {
    // Variable(s)
    const recipe = await Recipe.findByPk(parseInt(req.params.id));

    // Condition(s)
    if (recipe) {
        res.json(recipe);
    } else {
        res.sendStatus(404);
    }
})

// Export(s)
module.exports = router;