const express = require("express");
const path = require("path");
const orm = require("../config/orm");

router = express.Router();

router.get("/", function(req, res) {

orm.sendData(res);
    
});

router.get("/css", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/assets/burger_style.css"));
});

router.get("/burger-image", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/assets/burger.png"));
});

// Create a new plan
router.post("/api/burgers", function(req, res) {

    orm.createBurger(req,res);

});

// Delete a plan
router.delete("/api/burgers/:id", function(req, res) {

orm.deleteBurger(req,res);    
    
});

module.exports = router;