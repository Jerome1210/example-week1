
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
