var express = require('express');
var bodyParser = require('body-parser');
var request = require('request')
var app = express();
var algo = require('./algo.js')
var db = require('./database.js')

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json())

// Due to express, when you load the page, it doesnt make a get request to '/', it simply serves up the dist folder
app.post('/', function(req, res) {
  
})

// app.post('/leaderboard', (req, res) => {
//     console.log(req.body)
//     const stringTime = JSON.stringify(req.body.time)
//     db.query('INSERT INTO users (name, time) VALUES ("' + req.body.name + '"' + ', '  + stringTime + ')', function(err, results) {
//       if(err) {console.log(err)}
//     })

//     res.end('leaderboard')
// })

// sql: 'INSERT INTO users (name, time) VALUES ("i' }
// sql: 'INSERT INTO users (name, time) VALUES ("m, m")' }
// db.query('INSERT INTO coins (result) VALUES ("' + coin + '")', function(err, results) {
//   if(err) {console.log(err)} 
// })

app.post('/mathprofessor',function(req, res) {
 var result = algo()
  console.log(result)
  res.send(result)
})

app.listen(process.env.PORT || 2020, function() {
  console.log('listening on port 2020!');
});