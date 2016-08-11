var http = require('http');
var url = require('url');
var fs = require('fs');
var port = 8000;

var server = http.createServer(requestHandler);

server.listen(port, function(){
	console.log('Server is listening on port ',port)
})

function requestHandler(request, response){
	var path = url.parse(request.url).pathname;
	if(path === '/'){
		sendRequestedFile('index.html',response);
	} else if (path === '/style.css'){
		sendRequestedFile('style.css',response);
	} else if (path === '/index.js'){
		sendRequestedFile('index.js',response);
	} else {
		response.end();
	}
}

function sendRequestedFile(filename,response){
	var file = filename;
	fs.readFile(file, "utf8", function(err, file) {
    if(err) {        
      response.writeHead(500, {"Content-Type": "text/plain"});
      response.write(err + "\n");
      response.end();
      return;
    }

    response.writeHead(200);
    response.write(file, "utf8");
    response.end();
  });
}