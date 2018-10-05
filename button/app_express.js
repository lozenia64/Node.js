var express = require('express');
var fs = require('fs');
var app = express();

app.listen(3303, function(){
  console.log('Server Start.');
});

app.get('/', function(req, res){
  fs.readFile('index.html', function (error, date){
    if(error){
      console.log(error);
    } else {
      res.writeHead(200, {'Content-Type':'text/html'});
      res.end(date);
    }
  });
});

app.get('/main', function(req, res){
  fs.readFile('main.html', function (error, date){
    if(error){
      console.log(error);
    } else {
      res.writeHead(200, {'Content-Type':'text/html'});
      res.end(date);
    }
  });
});

