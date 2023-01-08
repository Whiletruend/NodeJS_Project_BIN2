// Variable(s)
const { Router } = require("express");
const { Recipe, User } = require("../models");
const router = new Router(); // Create the object "router"
const route_path = "/" ; // Which route it'll be

/*
    Purpose: Get & show the page of the concerned route_path
    Method: GET
*/
router.get(route_path, async (req, res) => {
    // Variable(s)
    const recipes_Count = await Recipe.count();
    const users_Count = await User.count();

    // Send the result
    res.send(
        "Bienvenue sur CookingBook ! <br> <br>" +
        "Il y a actuellement " + recipes_Count + " recette(s) de cuisine disponible(s) ! <br>" +
        "Ainsi que " + users_Count + " utilisateur(s) enregistré(s)"
    );
});

// export
module.exports = router;