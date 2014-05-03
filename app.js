<<<<<<< HEAD

var http = require("http");
var port = 1337;
var request = require("request"); 
var url = "http://graph.facebook.com/misstata0503/photos?type=uploaded";


http.createServer( function (req, res){
		
	var data = "<html><body>";
	
	request.get (url, function (err, body, result){
		result = JSON.parse(result);
		result.data.forEach (function (val, idx){
			data += "<img src ='" + val.images[2].source + "'>";
		});
		//data += result;
		data += "</body></html>";
		res.end(data);
	});
	

}).listen(port) ;

console.log("server create:" + port);
=======
/**
 * @overview
 *
 * @author
 * @version 2014/04/26
 */

var http = require("http");
var port = 1337;
var request = require("request");
var url = "http://graph.facebook.com/Boo/photos?type=uploaded";

http.createServer(function (req, res) {
  res.writeHeader(200, {"Content-Type": "text/html"});
  
  var data = "<html><head><title>hello world</title></head><body>"
  request.get(url, function (err, body, response) {

    response = JSON.parse(response);
    response.data.forEach(function (val, idx) {
      data += "<img src='" + val.images[2].source + "'>";
    });
    
    data += "</body></html>";
    res.end(data);
  });

}).listen(port);

console.log("start server port: " + port);


>>>>>>> bbd7a00f603b43d8c363fe9dae8be0f538667ab7
