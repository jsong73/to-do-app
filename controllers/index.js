const router = require("express").Router();
const homeRoutes = require("./homeRoutes");
const taskRoutes = require("./taskRoutes");
const userRoutes = require("./userRoutes");

//localhost:5500/api/user
router.use("/api/user", userRoutes);
//localhost:5500/api/tasks
router.use("/api/tasks", taskRoutes)

router.use("/", homeRoutes);

module.exports = router;