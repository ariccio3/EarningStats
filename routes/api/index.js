const router = require("express").Router();
const userRoutes = require("./users");
const sortedRoutes = require("./sorted");

// User routes
router.use("/users", userRoutes);

// Sorted routes
router.use("/sorted", sortedRoutes);

module.exports = router;
