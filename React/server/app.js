var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

//var routes = require('./routes/index');
//var users = require('./routes/users');
var movies = require('./routes/movieroute');
var mongoose = require('mongoose');
var reactroute = require('./routes/reactroute');

var app = express();
//var controller = require('./controller.js')

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use('/',express.static(path.join(__dirname,'../client/dist')))
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect("mongodb://localhost/movie10")

var db=mongoose.connection;
db.on('error', console.error.bind(console, "MongoDB connection error!"));
db.once('open', () => {
 console.log("Connected to MongoDB successfully.");
});

//app.use('/', routes);
//app.use('/users', users);
app.use('/movieroute', movies)
app.use('/reactroute', reactroute);
//app.use('/deletemovie', deletemovie)
//app.use('/', controller.index);
//app.listen(8080);

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
