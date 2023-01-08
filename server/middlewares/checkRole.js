// Roles table
const roles = {
    USER: 0,
    ADMIN: 1,
};

// Export(s)
module.exports = function(roleCheck, options = {}) {
  return function(req, res, next) {
      // Variable(s)
      const user = req.user;
      const rolesHierarchy = Object.keys(roles);

      // Condition(s)
      if (req.body && options.securedFields) {
          const securedFieldsFound = Object.keys(req.body).filter((field) => options.securedFields.includes(field));

          if (securedFieldsFound.length) {
              if (!user) {
                  return res.sendStatus(403);
              }
              console.log("SecuredFields found: " + securedFieldsFound.join(", "));

              if (
                  rolesHierarchy.indexOf(user.is_admin) >= rolesHierarchy.indexOf(roleCheck)
              ) {
                  console.log("SecuredFields: user has role");
                  return res.sendStatus(403);
              } else {
                  console.log("SecuredFields: user doesn't have a role");
                  return res.sendStatus(403);
              }
          } else {
              if (options.anonymous) {
                  return next();
              }
              return user ? next() : res.sendStatus(403);
          }
      }

      if (options.anonymous) {
          return next();
      }
      if (!user) {
          return res.sendStatus(403);
      }

      if (
          rolesHierarchy.indexOf(user.is_admin) >= rolesHierarchy.indexOf(roleCheck)
      ) {
          console.log("Global: user has role");
          next();
      } else {
          console.log("Global: user doesn't have a role");
          res.sendStatus(403);
      }
  };
};

// Export(s)
module.exports.ROLES = roles;