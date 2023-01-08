// Variable(s)
const { Router } = require("express");
const { User } = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { findOne } = require("../models/Recipe");
const router = new Router(); // Create the object "router"
const route_path = "/login" ; // Which route it'll be
const SECRET = process.env.JWT_SECRET || "SECRET_password";

// Route

/*
    Purpose: make a the user log himself in a secured way
    Method: POST
*/
router.post(route_path, async (req, res) => {
    const user = await User.findOne({
        where: {
            email: req.body.email,
        },
    });
    if(!user){
        res.sendStatus(401);
    }

    else{
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
        else{
            res.sendStatus(401);
        }
    }

});

module.exports = router;