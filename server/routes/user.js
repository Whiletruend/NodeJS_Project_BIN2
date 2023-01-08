// Require(s)
const { Router } = require("express");
const { User } = require("../models");

// Variable(s)
const checkAuth = require("../middlewares/checkAuth");
const checkRole = require("../middlewares/checkRole");
const router = new Router(); // Create the object "router"
const route_path = "/user" ; // Which route it'll be

/*
    Purpose: Get & show the page of the concerned route_path
    Method: GET
*/
router.get(route_path, (req, res) => {
    res.send("Page concernant les utilisateurs");
});

/*
    Purpose: Get a specific user base on ID
    Method: GET
*/
router.get(route_path + "/:id", checkAuth(), checkRole(checkRole.ROLES.ADMIN), async (req, res) => {
    // Variable(s)
    const user = await User.findByPk(parseInt(req.params.id), {
        attributes: {
            exclude: ["password"]
        },
    });

    // Condition(s)
    if (user) {
        res.type('json').send(JSON.stringify(user, null, 2) + '\n');
    } else {
        res.sendStatus(404);
    }
})

/*
    Purpose: Get every users
    Method: GET
*/
router.get(route_path + "s", checkAuth(), checkRole(checkRole.ROLES.ADMIN), async (req, res) => {
    // Variable(s)
    const users = await User.findAll({
        where: req.query,
        attributes: {
            exclude: ["password"]
        },
    });

    // Condition(s)
    if (users) {
        // Send formatted json
        res.type('json').send(JSON.stringify(users, null, 2) + '\n');
    } else {
        res.sendStatus(404);
    }
})

/*
    Purpose: Create new user
    Method: POST
*/
router.post(route_path, checkAuth(), checkRole(checkRole.ROLES.ADMIN), async (req, res, next) => {
    // Try - Catch
    try {
        // Variable(s)
        const user = new User(req.body);

        // Create
        await user.save({
            fields: ['last_name', 'first_name', 'is_admin', 'email', 'password', 'phone_number']
        });

        // Return status
        res.status(201).json(user);
    } catch(err) {
        console.log("CREATE USER ERR");
        next(err);
    }
})

/*
    Purpose: Update a user based on ID
    Method: PUT
*/
router.put(route_path + "/:id", checkAuth(), checkRole(checkRole.ROLES.ADMIN), async (req, res, next) => {
    // Try - Catch
    try {
        // Variable(s)
        const id = parseInt(req.params.id);

        // Update
        const [nbUpdated] = await User.update(req.body, {
            where: {
                id,
            },

            individualHooks: true,
        });

        // Condition(s)
        if(!nbUpdated) {
            res.sendStatus(404);
        } else {
            console.log("UPDATED");
            res.json(await User.findByPk(id));
        }
    } catch(err) {
        console.log("UPDATE USER ERR");
        next(err);
    }
})

/*
    Purpose: Delete a specific user based on ID
    Method: DELETE
*/
router.delete(route_path + "/:id", checkAuth(), checkRole(checkRole.ROLES.ADMIN), async (req, res, next) => {
    // Variable(s)
    const id = parseInt(req.params.id);

    // Delete
    const nbDeleted = await User.destroy({
        where: {
            id,
        },
    });

    // Return status
    res.sendStatus(!nbDeleted ? 404 : 204);
})

// Export(s)
module.exports = router;