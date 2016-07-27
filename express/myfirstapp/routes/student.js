var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");
var fdata = {};
var User = require("../models/student");
router.get('/', function (req, res) {
  db.on("error", console.error.bind(console, "Connection Error:"));
  db.open('open', function(){
    User.find({age:35}, function(err, data){
      fdata = data;
    });
  });
  res.send(fdata);
});
​module.exports = router;
