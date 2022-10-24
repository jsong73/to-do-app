const router = require("express").Router();

const taskRoutes = require("./taskRoutes");
const userRoutes = require("./userRoutes");

//localhost:5500/api/user
router.use("/user", userRoutes);
//localhost:5500/api/tasks
router.use("/tasks", taskRoutes)

module.exports = router;