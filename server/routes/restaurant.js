// Variable(s)
const { Router } = require("express");
const { Restaurant } = require("../models");
const checkAuth = require("../middlewares/checkAuth");
const checkRole = require("../middlewares/checkRole");
const router = new Router(); // Create the object "router"
const route_path = "/restaurant"; // Which route it'll be

/*
    Purpose: Get & show the page of the concerned route_path
    Method: GET
*/
router.get(route_path, (req, res) => {
    res.send("Page concernant les restaurants");
});

/*
    Purpose: Get a specific restaurant based on ID
    Method: GET
*/
router.get(route_path + "/:id", async (req, res) => {
    // Variable(s)
    const restaurant = await Restaurant.findByPk(parseInt(req.params.id));

    // Condition(s)
    if (restaurant) {
        // Send formatted json
        res.type('json').send(JSON.stringify(restaurant, null, 2) + '\n');
    } else {
        res.sendStatus(404);
    }
})

/*
    Purpose: Get every restaurants from the DB
    Method: GET
*/
router.get(route_path + "s", async (req, res) => {
    // Variable(s)
    const restaurants = await Restaurant.findAll();

    // Condition(s)
    if (restaurants) {
        // Send formatted json
        res.type('json').send(JSON.stringify(restaurants, null, 2) + '\n');
    } else {
        res.sendStatus(404);
    }
})

/*
    Purpose: Create a new restaurant
    Method: POST
*/
router.post(route_path, checkAuth(), checkRole(checkRole.ROLES.ADMIN), async (req, res, next) => {
    // Try - Catch
    try {
        // Variable(s)
        const restaurant = new Restaurant(req.body);

        // Create
        await restaurant.save({
            // Set scope that need to be used
            fields: ['name', 'address', 'cuisine_type', 'note']
        });

        // Return status
        res.status(201).json(restaurant);
    } catch (err) {
        console.log("CREATE restaurant ERR");
        next(err);
    }
})

/*
    Purpose: Update a restaurant based on ID
    Method: PUT
*/
router.put(route_path + "/:id", checkAuth(), checkRole(checkRole.ROLES.ADMIN), async (req, res, next) => {
    // Try - Catch
    try {
        // Variable(s)
        const id = parseInt(req.params.id);

        // Update
        const [nbUpdated] = await Restaurant.update(req.body, {
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
            res.json(await Restaurant.findByPk(id));
        }
    } catch (err) {
        console.log("PUT restaurant ERR");
        next(err);
    }
})

/*
    Purpose: Delete a specific restaurant based on ID
    Method: DELETE
*/
router.delete(route_path + "/:id", checkAuth(), checkRole(checkRole.ROLES.ADMIN), async (req, res) => {
    // Variable(s)
    const id = parseInt(req.params.id);

    // Delete
    const nbDeleted = await Restaurant.destroy({
        where: {
            id,
        },
    });

    // Return status
    res.sendStatus(!nbDeleted ? 404 : 204); // Ternary conditions to get the valid status
})

// Export(s)
module.exports = router;