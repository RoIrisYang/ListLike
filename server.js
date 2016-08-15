var express = require("express");
var app = express();
// for static files
app.use(express.static(path.join(__dirname, 'dist')));
var server = http.createServer(app);
server.listen(process.env.PORT || 8080,function(){
    console.log("Server running...");
});