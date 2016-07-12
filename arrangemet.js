var myObj =

   [{ 'name': 'Saurabh', 'age': 30, 'occupation': "Team Leader" },

       { 'name': 'Anupriya', 'age': 32, 'occupation': "Team Leader" },

       { 'name': 'Kalyani', 'age': 25, 'occupation': "Programmer" },

       { 'name': 'Damodaran', 'age': 27, 'occupation': "Programmer" },

       { 'name': 'Krishnakath', 'age': 22, 'occupation': "Programmer" },

       { 'name': 'Venketraman', 'age': 28, 'occupation': "Programmer" }];

function CustomType(name,age){
   this.name=name;
   this.age=age;
}

function fetchData(obj, prop, value) {
   var arr = [];
   for (var i = 0; i < obj.length; i++) {
       if (obj[i][prop].toString() == value) {
           arr.push(new CustomType(obj[i]["name"],obj[i]["age"]));
       }
   }
   return arr;
}

// I have blindly adding to the dictionary/map. Can be done smartly..:)
function Recreate(obj){
  var dist=[];
   for(var i=0;i<obj.length;i++){
    var arr= fetchData(myObj,"occupation",obj[i]["occupation"].toString());
    dist[obj[i]["occupation"].toString()]=arr;
   }
   return dist;
}

var dist = Recreate(myObj);
console.log(dist);