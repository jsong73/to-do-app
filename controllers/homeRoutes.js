const router = require("express").Router();
const { User, Tasks } = require("../models")

router.get("/jessica", async (req, res) => {
    try{
       const userData = await User.findAll({
        include: [{ model: Tasks }],
       });
       console.log(userData)
       const serializedData = userData.map((user) => user.get({ plain: true}));
       console.log(serializedData)
       res.render("jessica", {serializedData})
    } catch (err) {
        res.status(400).json(err);
    }
    
});

router.get("/", async (req,res) => {
    try{
        const userData = await User.findByPk("1");
        console.log(userData)
        //cleaned up version of userData
        const serializedData = userData.get({ plain: true })
        console.log(serializedData)
        res.render("jung", serializedData)
    } catch (err) {
        res.status(400).json(err);
    }
});



module.exports = router;