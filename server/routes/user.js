// Variable(s)
const { Router } = require("express");
const { User } = require("../models");
const router = new Router(); // Create the object "router"
const route_path = "/user" ; // Which route it'll be

/*
    Purpose: Get & show the page of the concerned route_path
    Method: GET
*/
router.get(route_path, (req, res) => {
    res.send("Page concernant les utilisateurs");
});

// export
module.exports = router;