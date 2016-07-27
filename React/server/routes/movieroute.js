var express = require('express');
var Movie= require('../Models/movieschema');
//var mongoose= require('mongoose');
//var mov=require('../movie.js');
var router = express.Router();
var requestify = require('requestify');// GET Request:

const url=require('url');

//to perform Add Operation in DBase
router.post('/movieadd', function(req, res) {
  var name=req.body.name;
  var data;

  requestify.get("http://www.omdbapi.com/?t="+name+"&y=&plot=short&r=json").then(function(response)
  {    //data.push(response.body);
    data=response.body;
    console.log(data);
    data=JSON.parse(data);
    console.log(data);
    //res.send(data);
    var movie=new Movie();

    movie.Title=data.Title;
     movie.Year=data.Year;
     movie.Rated=data.Rated;
     movie.Released=data.Released;
     movie.Runtime=data.Runtime;
     movie.Genre=data.Genre;
     movie.Director=data.Director;
     movie.Writer=data.Writer;
     movie.Actors=data.Actors;
     movie.Plot=data.Plot;
     movie.Language=data.Language;
     movie.Country=data.Country;
     movie.Awards=data.Awards;
     movie.Poster=data.Poster;
     movie.Metascore=data.Metascore;
     movie.imdbRating=data.imdbRating;
     movie.imdbVotes=data.imdbVotes;
     movie.imdbID=data.imdbID;
     movie.Type=data.Type;
     movie.Response=data.Response;

     movie.save(function(err){
       if(err)
       res.send(err);
       res.send("Movie Added");
     });
  });});

  //to perform delete Operation in DBase
    router.delete('/delete', function(req, res) {
      var name=req.body.name;
      var movie=new Movie();

      Movie.remove({ "Title": name }, function(err)
    {
        if(err)
          res.send(err);
        res.json({message:"Deleted"});
        console.log("Deleted from database");
    })
  });

    //to fetch all records from DBase
    router.get('/showall', function (req, res){
        Movie.find({}, function(err, fdata){
          data = fdata;
          res.send(data);
        });
    });

    //to perform update Operation in DBase
    /*router.put('/update', function (req, res){
    Movie.find({'title':req.body.name},function(err,data){
    if(err)
      res.send("Movie not found");
    for(prop in req.body){
       Movie[prop] = req.body[prop];}
   //res.end("Updated");
   console.log(Movie[prop]);
   var obj1=new Movie();
   obj1.save(function (err) {
     if (err) res.send(err);
     res.send("Movie Updated");
   });
   });
});*/
module.exports = router;
