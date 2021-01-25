const express = require ("express");
const { route } = require("./avengers");
const router = express.Router();


// get avenger details
router.get ("/", (req, res ) => {
    res.send("Welcome to avengers API");
})

module.exports = router;