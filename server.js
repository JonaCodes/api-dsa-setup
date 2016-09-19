var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.use("/node_modules", express.static(__dirname + '/node_modules'));
app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html')
});

//THIS IS THE API! RIGHT HERE v
app.get('/entrance', function(req,res){
	res.send(
		{1:"one"}
	)
})

app.post('/entrance', function(req,res){
	console.log("got from client", req.body)
	res.end()
})

app.listen(1337)



