// Base require(s)
const { ValidationError } = require("sequelize");

// Export(s)
module.exports = function(err, req, res, next) {
    // Print error
    console.log(err, err instanceof ValidationError);

    // Condition(s)
    if (err instanceof ValidationError) {
        // Show HTML 422 status with json infos of the err
        res.status(422).json(
            err.errors.reduce((acc, item) => {
                acc[item.path] = [...(acc[item.path] || []), item.message];
                return acc;
            }, {})
        );
    } else {
        console.error(err);
        res.sendStatus(500);
    }
};