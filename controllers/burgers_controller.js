var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();

//Create all routes
router.get("/", function(req,res) {
    burger.selectAll(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/", function(req, res) {
    console.log(req.body.burger_name);
})

module.exports = router;