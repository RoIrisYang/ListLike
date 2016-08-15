var express = require("express");
var http = require("http");
var path = require("path");
var app = express();
// for static files
app.use(express.static(path.join(__dirname, 'dist')));
app.get( '/' , function(req, res){
    res.sendFile("index.html", { root: __dirname });
});
var server = http.createServer(app);
server.listen(process.env.PORT || 8080,function(){
    console.log("Server running...");
});