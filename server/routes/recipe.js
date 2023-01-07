// Variable(s)
const { Router } = require("express");
const { Recipe } = require("../models");
const router = new Router(); // Create the object "router"
const route_path = "/recipe"; // Which route it'll be

/*
    Purpose: Get & show the page of the concerned route_path
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
        // Send formatted json
        res.type('json').send(JSON.stringify(recipe, null, 2) + '\n');
    } else {
        res.sendStatus(404);
    }
})

/*
    Purpose: Get every recipes from the DB
    Method: GET
*/
router.get(route_path + "s", async (req, res) => {
    // Variable(s)
    const recipes = await Recipe.findAll();

    // Condition(s)
    if (recipes) {
        // Send formatted json
        res.type('json').send(JSON.stringify(recipes, null, 2) + '\n');
    } else {
        res.sendStatus(404);
    }
})

/*
    Purpose: Create a new recipe
    Method: POST
*/
router.post(route_path, async (req, res, next) => {
    // Try - Catch
    try {
        // Variable(s)
        const recipe = new Recipe(req.body);

        // Create
        await recipe.save({
            // Set scope that need to be used
            fields: ['name', 'difficulty', 'ingredients', 'preparation_time', 'cooking_time', 'note']
        });

        // Return status
        res.status(201).json(recipe);
    } catch (err) {
        console.log("CREATE RECIPE ERR");
        next(err);
    }
})

/*
    Purpose: Update a recipe based on ID
    Method: PUT
*/
router.put(route_path + "/:id", async (req, res, next) => {
    // Try - Catch
    try {
        // Variable(s)
        const id = parseInt(req.params.id);

        // Update
        const [nbUpdated] = await Recipe.update(req.body, {
            where: {
                id,
            },
            individualHooks: true,
        });

        // Condition(s)
        if(!nbUpdated) {
            res.sendStatus(404);
        } else {
            console.log("CREATED");
            res.json(await Recipe.findByPk(id));
        }
    } catch (err) {
        console.log("PUT RECIPE ERR");
        next(err);
    }
})

/*
    Purpose: Delete a specific recipe based on ID
    Method: DELETE
*/
router.delete(route_path + "/:id", async (req, res) => {
    // Variable(s)
    const id = parseInt(req.params.id);

    // Delete
    const nbDeleted = await Recipe.destroy({
        where: {
            id,
        },
    });

    // Return status
    res.sendStatus(!nbDeleted ? 404 : 204); // Ternary conditions to get the valid status
})

// Export(s)
module.exports = router;