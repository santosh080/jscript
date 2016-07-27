var mongoose = require('mongoose');
var express = require('express');
var router = express();
var http = require('http');
var bodyParser = require('body-parser');

var Schema = mongoose.Schema;
var mailboxSchema = new Schema({
  MailFrom:String,
  MailSubject:String,
  MailBody:String,
  MailDate:String,
  MailTime:String
});

var MailBox = mongoose.model('MailBox', mailboxSchema);

router.use(bodyParser.json());       // to support JSON-encoded bodies
router.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

mongoose.connect('mongodb://localhost/myappdatabase', function (error) {
  if (error) {
    console.log(error);
  }
});

//code for creating new record
router.post("/mailbox/add", function (req, res) {
var mailObj = new MailBox({
  MailFrom:req.body.MailFrom,
  MailSubject:req.body.MailSubject,
  MailBody:req.body.MailBody,
  MailDate:req.body.MailDate,
  MailTime:req.body.MailTime
  });
  console.log(mailObj);
  mailObj.save(function (err, mailObj) {
    if (err) return console.error(err);
    console.dir(mailObj);
  });
  res.send(mailObj);
});

//code to fetch inbox
router.get("/mailbox/", function (req, res) {
  MailBox.find({}, function (err, doc) {
    if (err) throw err;
    console.log("mailbox/ ::::" + doc);
    res.send(doc);
  });
});

//code for home page
router.get('/', function (req, res) {
  res.send('Welcome to your mail box!');
});

module.exports = router;
