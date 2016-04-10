var express = require('express');
var app = express();
var multer  = require('multer');
var storage = multer.memoryStorage();
var upload = multer();
var port = process.env.PORT || 8080; //Heroku

app.get("/", function(req,res){
    res.sendFile(__dirname + "/index.html");
})

//The paramater for upload.single needs to be the NAME of the INPUT we want to read from
app.post("/upload", upload.single("input-file"), function(req,res){
    res.send({size: req.file.size});
})

app.listen(port, function(){
    console.log("Listening on port " + port);
})

app.use('/public', express.static('public')); //CSS and stuff