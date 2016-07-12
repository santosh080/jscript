fs = require('fs')
fs.readFile('file1.csv', 'utf8', function (err,data) {
if (err) {
return console.log(err);
}

data1=csvJSON(data);
console.log(data1);
var wstream = fs.createWriteStream('output3.json');
wstream.write(data1);
wstream.end();
});
function csvJSON(csv){

var lines=csv.split("\n");

var result = [];

var headers=lines[0].split(",");

for(var i=1;i<lines.length;i++){

var obj = {};

var currentline=lines[i].split(",");

for(var j=0;j<headers.length;j++){
if(headers[j]=="Country Name" )
{
obj["country"] = currentline[j];
}
if(headers[j]=="Gross domestic product based on Purchasing-Power-Parity (PPP) valuation of Country GDP in Billions (Current International Dollar) 2015" )
{
obj["purchasingPower"] = currentline[j];
}
}
result.push(obj);

}
result.sort(function(x,y)
{
  return(x.purchasingPower-y.purchasingPower)
});


return JSON.stringify(result);
}
