var i=10;
 console.log(i);
 function display(){
   var i=12;
   console.log(i);

 };
function display1(callback){
 console.log(i);
 callback && callback();
 //display();
 };
