var dumb=function (){


var i=0;
while (i<100) {
//  console.log(i)
  ++i;
}
}
setImmediate(dumb);
console.log("finished");
