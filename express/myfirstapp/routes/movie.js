var Movie = require('../models/movschema');
var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var film=require('node-movie');

//Getting All Movies
router.get('/movieAll', function(req, res) {
 Movie.find(function(err, movies) {
   if(err){
     return res.send("No movie to show");
   }

   res.json(movies);
});
});

//Adding a new Movie
 router.post('/movieAdd',function(req, res) {

   film(req.body.name, function (err,data){
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
     movie.Poster=data.Poster;
     movie.Metascore=data.Metascore;
     movie.imdbRating=data.imdbRating;
     movie.imdbVotes=data.imdbVotes;
     movie.imdbID=data.imdbID;
     movie.Type=data.Type;
     movie.Response=data.Response;


   movie.save(function(err) {
   if(err) {
     return res.send("Data not added");
   }

   res.send("data added succesfully"+movie);

 });
});
});
//deleting an existed movie
router.delete('/deleteMovie/:id', function(req, res) {
 Movie.remove({
   _id: req.params.id
 }, function(err, movie) {
     if(err) {
       res.send("Movie id not exist");
     }

     res.json(movie);

 });
});

//Updating existed movie.
router.put('/updateMovie/:id', function(req, res) {
 Movie.findOne({ _id: req.params.id}, function(err, movie) {
   if(err) {
     return res.send("Movie id not exist, not possible to update");
   }

   for(prop in req.body) {
     movie[prop] = req.body[prop];
   }

   //save the movie
   movie.save(function(err) {
     if(err) {
       return res.send("data not possible to save");
     }

     res.json(movie);
   });
 });
});


module.exports = router;
