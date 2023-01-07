// export
module.exports = (req, res, next) => {
    if(req.method === "POST" || req.method === "PUT"){
        if(!req.headers["content-type"]?.startsWith("application/json")){
            return res.sendStatus(400);
        }
    }
    next();
};

