
var http = require("http");
var port = Number(process.env.PORT || 3000);
var request = require("request"); 
var url = "http://graph.facebook.com/misstata0503/photos?type=uploaded";
var fs = require("fs");
/*
fs.readFile("./index.html", "utf8", function (err, result)){
	template = result;
};
*/

template = fs.readFileSync("fs/index.html", "utf8");

http.createServer( function (req, res){
		
	var data = "";
	
	request.get (url, function (err, body, result){
		result = JSON.parse(result);
		result.data.forEach (function (val, idx){
			data += "<img src ='" + val.images[2].source + "'>";
		});
		//data += result;
		data = template.replace("{{content}}", data );

		res.end(data);
	});
	

}).listen(port) ;

console.log("server create:" + port);
