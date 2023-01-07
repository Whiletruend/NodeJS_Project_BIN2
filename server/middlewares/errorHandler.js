// Base require(s)
const { ValidateError } = require("sequelize");

// Export(s)
module.exports = function(err, req, res) {
    // Print error
    console.log(err, err instanceof ValidateError);

    // Condition(s)
    if (err instanceof ValidateError) {
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