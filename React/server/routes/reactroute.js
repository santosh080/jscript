var express = require('express');
var Movie= require('../Models/movieschema');
var mongoose= require('mongoose');
var bodyParser= require('body-parser');
var requestify=require('requestify');

var router = express.Router();
//var requestify = require('requestify');// GET Request:

//const url=require('url');

router.post('/', function(req,res){
  var movie=new Movie(req.body);
     movie.save(function(err){
     if(err)
     res.send(err);
     res.send("Movie Added");
});});

router.delete('/deletemovie', function(req, res) {
  //var name=req.body.name;
  //var movie=new Movie(req.body.Title);

  Movie.remove({"Title": req.body.Title}, function(err)
{
    if(err)
      res.send(err);
    res.json({message:"Deleted"});
    console.log("Deleted from database");
})
});
module.exports=router;
