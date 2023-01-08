// Require(s)
const { Router } = require("express");
const { User } = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { findOne } = require("../models/Recipe");

// Variable(s)
const router = new Router(); // Create the object "router"
const route_path = "/login" ; // Which route it'll be
const SECRET = process.env.JWT_SECRET || "SECRET_password";


/*
    Purpose: make the user log himself in a secured way
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
    // If the user do not exists (not found by the email)
    if(!user){
        res.sendStatus(401);
    } else {
        // If the crypted password match with the on in DB
        if(bcrypt.compareSync(req.body.password, user.password)){
            res.json({
                token: jwt.sign(
                    {
                        lastname: user.lastname, 
                        firstname: user.firstname,
                        is_admin: user.is_admin,
                        id: user.id,
                    },
                    SECRET
                ),
            });
        }
        // Else return 401
        else{
            res.sendStatus(401);
        }
    }
});

// Exports()
module.exports = router;