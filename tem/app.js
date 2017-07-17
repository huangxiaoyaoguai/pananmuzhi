var express = require('express');
var app = express();

var path = require('path');



app.use('/js', express.static('./js'));

app.use('/css', express.static('./css'));

app.use('/images', express.static('./images'));



app.get('*',function(req,res){
	res.sendFile(path.resolve(__dirname,'./index.html'))
})


app.listen(3000,function(req,res){

	console.log("localhost:3000")
})