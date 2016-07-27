var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var mongoose = require('mongoose');
var logger = require('morgan');
var movie = require('./routes/movie');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
// var stuschema = require('./routes/stuschema');
 var routes = require('./routes/index');
 var users = require('./routes/users');
 var get=require('./routes/get');
var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
//connect to the database
// var express = require('express');
// var app = express();
// var mongoose = require("mongoose");
var fdata = {};
var bodyParser = require("body-parser");
var User = require("./models/movschema");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//db connection
mongoose.connect('mongodb://localhost/users')
var db = mongoose.connection;
app.get('/', function (req, res) {
  db.on("error", console.error.bind(console, "Connection Error:"));
  db.open('open', function(){
  console.log("connected to database ");
    });
  });



// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', routes);
app.use('/users', users);
app.use('/get',get);
app.use('/movie', movie);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
// error handlers
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}
// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});
module.exports = app;
