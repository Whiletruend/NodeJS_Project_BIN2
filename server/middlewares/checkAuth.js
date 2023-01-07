const jwt = require("jsonwebtoken");
const SECRET = process.env.JWT_SECRET || "SECRET_password";

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
            const user = jwt.verify(token, SECRET);
            req.user = user;
            next();
        }catch(error){
            console.log(error);
            res.sendStatus(401);
        }
    };
};