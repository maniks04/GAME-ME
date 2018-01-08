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

// app.get('/leaderboard', (req, res) => {
//   //query the database for results
//   console.log(req.body)
//   res.end('leaderboard')
// })

// app.post('/leaderboard', (req, res) =>{
//   //query the database and insert
//   //then app.get results
// })


app.post('/mathprofessor',function(req, res) {
 var result = algo()
  console.log(result)
  res.send(result)
})

app.listen(process.env.PORT || 2020, function() {
  console.log('listening on port 2020!');
});