// Require(s)
const { Router } = require("express");
const { User } = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Variable(s)
const router = new Router(); // Create the object "router"
const route_path = "/login"; // Which route it'll be
const SECRET = process.env.JWT_SECRET || "SECRET_password";

/*
    Purpose: Make the user log himself in a secured way
    Method: POST
*/
router.post(route_path, async (req, res) => {
    // Create the user
    const user = await User.findOne({
        where: {
            email: req.body.email,
        },
    });

    // Condition(s)
    // If the user do not exist (not found by the email)
    if(!user){
        res.sendStatus(401);
    } else if (bcrypt.compareSync(req.body.password, user.password)) {
        res.json({
            token: jwt.sign(
                {
                    last_name: user.last_name,
                    first_name: user.first_name,
                    is_admin: user.is_admin,
                    id: user.id,
                },
                SECRET
            ),
        });
    }
    // Else return 401
    else {
        res.sendStatus(401);
    }
});

// Exports()
module.exports = router;