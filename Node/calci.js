var http = require("http");
const url = require('url');
var cal=require('./calc')

http.createServer(function (request, response) {

  // Send the HTTP header
  // HTTP Status: 200 : OK
  // Content Type: text/plain
  response.writeHead(200, {'Content-Type': 'text/plain'});
  var urlObject= url.parse(request.url,true)

  // Send the response body as "Hello World"
  var equa=urlObject.pathname.toString();
  var arr=equa.split('/');
  //response.end(arr.toString());


  if(arr[1]=='sum')
  {
    response.end("Addition        :  "+cal.sum(parseInt(arr[2]),parseInt(arr[3])));
  }
  else if (arr[1]=='sub')
  {
    response.end("Substraction    :  "+cal.sub(parseInt(arr[2]),parseInt(arr[3])));
  }
  else if (arr[1]=='mul')
  {
    response.end("Multiplication  :  "+cal.mul(parseInt(arr[2]),parseInt(arr[3])));
  }
  else if (arr[1]=='div')
  {
   response.end("Division         :  "+cal.div(parseInt(arr[2]),parseInt(arr[3])));
  }
  else
  {
    response.end("Not Calculation");
  }

 //var a=require('./calculator');
 //response.end('Calculator\n');
//  response.end('Calculator \n10+2 = '+a.sum(10,2)+'\n10-2 = '+a.sub(10,2)+'\n10*2 = '+a.mul(10,2)+'\n10/2 = '+a.div(10,2));
}).listen(8080);
