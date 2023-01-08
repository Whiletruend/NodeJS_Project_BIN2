// Require(s)
const jwt = require("jsonwebtoken");

// Variable(s)
const SECRET = process.env.JWT_SECRET || "SECRET_password";

// Export(s)
module.exports = function(options = {}){
    return function(req, res, next){
        const Authorization = req.headers["authorization"];
        if(!Authorization && options.anonymous){
            return next();
        }
        if(!Authorization){
            return res.sendStatus(401);
        }

        const [type, token] = Authorization.split(" ");

        if (type !== "Bearer"){
            return res.sendStatus(401);
        }
        try {
            req.user = jwt.verify(token, SECRET);
            next();
        }catch(error){
            console.log(error);
            res.sendStatus(401);
        }
    };
};