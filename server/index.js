var express = require('express');
var bodyParser = require('body-parser');
var request = require('request')
var app = express();
var algo = require('./algo.js')

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json())

// Due to express, when you load the page, it doesnt make a get request to '/', it simply serves up the dist folder
app.post('/', function(req, res) {
  
})






app.post('/mathprofessor',function(req, res) {
 var result = algo()
  //console.log(req.body.word)
  console.log(result)
  res.send(result)
  
})

app.listen(process.env.PORT || 3000, function() {
  console.log('listening on port 3000!');
});