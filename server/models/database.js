// Require(s)
const Sequelize = require("sequelize");

// Variable(s)
const db_host = "localhost"; // Default: localhost (127.0.0.1)
const db_user = "root"; // Default: root
const db_pass = "root"; // Default: N/A
const db_port = "3306"; // Default: 3306
const db_name = "nodejs_api"; // Can be changed
const db_url = process.env.DATABASE_URL || "mysql://" + db_user + ":" + db_pass + "@" + db_host + ":" + db_port + "/" + db_name; // Don't touch

// Init the connection with Sequelize using the db_url
// Removed the timestamps columns ("createdAt" & "updatedAt") to avoid any errors.
const db_conn = new Sequelize(db_url, {
    define: {
        timestamps: false
    }
});

// Check if the connection is done
db_conn.authenticate().then(() => console.log("Sequelize:: DB Connected!"));

// Export(s)
module.exports = db_conn;