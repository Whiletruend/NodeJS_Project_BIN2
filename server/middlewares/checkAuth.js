const jwt = require("jsonwebtoken");
const SECRET = process.env.JWT_SECRET || "SECRET_password";

module.exports = function(options = {}){
    return function(req, res, next){
        const Authorization = req.headers["authorization"];
        if(!Authorization && noptions){
            return next();
        }
        if(!Authorization){
            return res.sendStatus(401);
        }

        try {
            
        }catch(error){
            console.log(error);
            res.sendStatus(401);
        }
    };
};