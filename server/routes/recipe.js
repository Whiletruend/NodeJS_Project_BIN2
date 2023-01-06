// Variable(s)
const { Router } = require("express");
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
router.get(route_path + "/:id", (req, res) => {
    res.send("Recette ID: " + req.params.id);
});

// Export(s)
module.exports = router;