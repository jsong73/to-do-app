//.Router is another class in the express library that helps chain our URLS together
const router = require("express").Router();

//importing models folder only using obj destructuring - because index file is entry point
const { User, Tasks } = require("../models");

//localhost:5500/api/user/
router.get("/", async(req, res) => {
    try{
        const userData = await User.findAndCountAll({
            include: [{ model: Tasks}],
        });
        console.log(userData);
        res.status(200).json(userData);
    } catch (err){
        res.status(500).json(err);
    }
});

//localhost:5500/api/user/
router.post("/", async (req, res) => {
    try{
        const userData = await User.create(req.body);
        res.status(200).json({ msg: "Your information was recieved!", userData});
    } catch (err){
        res.status(400).json(err);
    }
});

module.exports = router;
