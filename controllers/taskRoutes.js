const router = require("express").Router();
const { Tasks } = require("../models");
//localhost:5500/api/tasks/
router.get("/", (req,res) => {
res.json("I am currently in the taskRoutes folder!")
});
//localhost:5500/api/tasks/
router.post("/", async (req, res) => {
try{
    const taskData = await Tasks.create(req.body);
    res.status(200).json({ msg: "This was input into the task table!", taskData})
    } catch (err){
        res.status(400).json(err);
    }
});

module.exports = router;
