// Variable(s)
const { Router } = require("express");
const { Category } = require("../models");
const checkAuth = require("../middlewares/checkAuth");
const checkRole = require("../middlewares/checkRole");
const router = new Router(); // Create the object "router"
const route_path = "/category"; // Which route it'll be

/*
    Purpose: Get & show the page of the concerned route_path
    Method: GET
*/
router.get(route_path, (req, res) => {
    res.send("Page concernant les catégories");
});

/*
    Purpose: Get a specific restaurant based on ID
    Method: GET
*/
router.get(route_path + "/:id", async (req, res) => {
    // Variable(s)
    const category = await Category.findByPk(parseInt(req.params.id));

    // Condition(s)
    if (category) {
        // Send formatted json
        res.type('json').send(JSON.stringify(category, null, 2) + '\n');
    } else {
        res.sendStatus(404);
    }
})

/*
    Purpose: Get every categorys from the DB
    Method: GET
*/
router.get("/categories", async (req, res) => {
    // Variable(s)
    const categories = await Category.findAll();

    // Condition(s)
    if (categories) {
        // Send formatted json
        res.type('json').send(JSON.stringify(categories, null, 2) + '\n');
    } else {
        res.sendStatus(404);
    }
})

/*
    Purpose: Create a new category
    Method: POST
*/
router.post(route_path, checkAuth(), checkRole(checkRole.ROLES.ADMIN), async (req, res, next) => {
    // Try - Catch
    try {
        // Variable(s)
        const category = new Category(req.body);

        // Create
        await category.save({
            // Set scope that need to be used
            fields: ['name', 'note']
        });

        // Return status
        res.status(201).json(category);
    } catch (err) {
        console.log("CREATE category ERR");
        next(err);
    }
})

/*
    Purpose: Update a category based on ID
    Method: PUT
*/
router.put(route_path + "/:id", checkAuth(), checkRole(checkRole.ROLES.ADMIN), async (req, res, next) => {
    // Try - Catch
    try {
        // Variable(s)
        const id = parseInt(req.params.id);

        // Update
        const [nbUpdated] = await Category.update(req.body, {
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
            res.json(await Category.findByPk(id));
        }
    } catch (err) {
        console.log("PUT category ERR");
        next(err);
    }
})

/*
    Purpose: Delete a specific category based on ID
    Method: DELETE
*/
router.delete(route_path + "/:id", checkAuth(), checkRole(checkRole.ROLES.ADMIN), async (req, res) => {
    // Variable(s)
    const id = parseInt(req.params.id);

    // Delete
    const nbDeleted = await Category.destroy({
        where: {
            id,
        },
    });

    // Return status
    res.sendStatus(!nbDeleted ? 404 : 204); // Ternary conditions to get the valid status
})

// Export(s)
module.exports = router;