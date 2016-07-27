var express = require('express');
var cal=require('../calci');
var router=express.Router();

router.get('/sum/:param1/:param2',function(req,res){
res.send("Sum:"+cal.sum(parseInt(req.param('param1')),parseInt(req.param('param2'))));
})
router.get('/sub/:param1/:param2',function(req,res){
res.send("Substraction:"+cal.sub(parseInt(req.param('param1')),parseInt(req.param('param2'))));
})
router.get('/mul/:param1/:param2',function(req,res){
res.send("Multiplication:"+cal.mul(parseInt(req.param('param1')),parseInt(req.param('param2'))));
})
router.get('/div/:param1/:param2',function(req,res){
res.send("Division:"+cal.div(parseInt(req.param('param1')),parseInt(req.param('param2'))));
})

module.exports=router;
