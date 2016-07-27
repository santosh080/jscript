var should = require("chai").should(),
expect = require("chai").expect,
assert = require("chai").assert,
supertest = require("supertest"),
app = require("../app");


//new code for database
var mongoose = require('mongoose');
var express = require('express');
var router = express();
var http = require('http');
var bodyParser = require('body-parser');
var Schema = mongoose.Schema;
var movieSchema = new Schema({
  name: String,
  desc: String,
  year: String,
  starcast:String
});
var Movie = mongoose.model('Movie1', movieSchema);
mongoose.connect('mongodb://localhost/myappdatabase', function (error) {
  if (error) {
    console.log(error);
  }
});


var url = supertest("http://localhost:8080");


describe("Testing the Home Page Route", function(err){
  it("should handle the request", function(done){
    url
        .get("/")
        .expect(200)
        .end(function(err,res){
          if (err) {
				        throw err;
			    }
          expect(res.text).to.be.equal("Welcome to Movies World!");
          res.text.should.be.equal("Welcome to Movies World!");
          assert(res.text == "Welcome to Movies World!","Test has failed");
          done();
        });
  });
});


describe("Testing for data insertion", function(err){
  it("should handle the request", function(done){
    url
        .post("/movies/add")
        .expect(200)
        .end(function(err,req,res){
          var movieObj = new Movie({
              name: req.body.name,
              desc: req.body.desc,
              year:req.body.year,
              starcast:req.body.starcast
            });
            //console.log(movieObj);
            assert(movieObj != null,"Test has failed");
          //  assert(req.body.desc == null,"Test has failed");
          //  assert(req.body.year == null,"Test has failed");
          //  assert(req.body.starcast == null,"Test has failed");

            movieObj.save(function (err, movieObj) {
              if (err) return console.error(err);
              //console.dir(movieObj);
            });
             done();
        });
  });
});


describe("Testing for fetching all movies", function(err){
  it("should handle and send the JSON data", function(done){
    url
        .get("/movies/")
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err,res){
            //code to fetch all movies
              Movie.find({}, function (err, doc) {
              if (err) throw err;
              data = doc;
            });
              assert(res.text != null,"Test has failed");
              done();
        });
    });
});



describe("Testing for fetching movies based on name", function(err){
  it("should handle and send the JSON data", function(done){
    url
        .get("/movies/movie")
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err,res){
              Movie.find({ name: res.body.name }, function (err, obj) {
              if (err) throw err;
              });
                assert(res.text != null,"Test has failed");
              done();
        });
    });
});


//code for updating
  router.post("/movies/update",function (req, res) {
  var n = req.query.name;
  console.log("name::::", n);
  Movie.findOneAndUpdate({ name: n },{ name: req.body.name, desc: req.body.desc, year:req.body.year, starcast:req.body.starcast}, function (err, obj) {
    if (err) throw err;
    console.log("movies/move ::::" + obj);
    res.send(obj);
    });
});

//code for deleting
router.post("/movies/delete",function (req, res) {
var n = req.query.name;
console.log("name::::", n);
Movie.remove({ name: n }, function (err, obj) {
  if (err) throw err;
  console.log("movies/move ::::" + obj);
  res.send("Deleted sucessfully");
  });
});
