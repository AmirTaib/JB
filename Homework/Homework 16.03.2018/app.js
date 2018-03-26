var fs = require("fs");  //fs = file-system
var http = require("http");

var content = "<h1>default msg</h1>";
let currrentHour = new Date().getHours();
console.log(currrentHour);
if (currrentHour >=6&& currrentHour<12) {
    fs.readFile("./morning.html", "utf-8", function (err, data) {
        content = data;
    });
}
else if (currrentHour >=12 && currrentHour<16) {
    fs.readFile("./Afternoon.html", "utf-8", function (err, data) {
        content = data;
    });
}
else if (currrentHour >=16 && currrentHour<20) {
    fs.readFile("./Evening.html", "utf-8", function (err, data) {
        content = data;
    });
}
else {
    fs.readFile("./night.html", "utf-8", function (err, data) {
        content = data;
    });
}
// Create http server:
var myServer = http.createServer(function (request, response) {

    console.log("User requested page...");

    // Send back header:
    response.writeHead(200, { "Content-Type": "text/html" });

    // Send back content: 
    response.write(content);

    // End response:
    response.end();
});

// Start listening on port 3500:
myServer.listen(3500);