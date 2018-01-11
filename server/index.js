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



//save this go to server

app.post("/leaderboard", function(req, res, next) { 
  console.log(req.body.name, req.body.time)
  //const stringTime = JSON.stringify(req.body.time) 
 

  db.save({user: req.body.name, time: req.body.time}, () => {
    console.log('saving')
    res.end('leaderboard')
  })


   //res.end('leaderboard') hit save hit save
//save there is also req.body.name save and show me the server move me back to swerver ok lets just try it with postmanok
// ok watch it should save now
// what u can do is after it makes a post on client then the client does a get, its not a good idea to have the post return data so watch 
});

app.get('/leaderboard', function(req, res) {
  console.log('getting leaderboard')
  db.find((results) => {
    //the problem started here so u start from here, u call db.find() and ur expecting results to come back so then u go to the db.find and fix it
    console.log(results)
    res.send(results)//save
  })

})


// var user = new User({
//   name: req.body.name,
//   time: stringTime
// });
// user.save(function(err, u) {
//   if (err) return next(err);
//   return res.end('leaderboard');
// });






app.post('/mathprofessor',function(req, res) {
 var result = algo()
  console.log(result)
  res.send(result)
})

app.listen(process.env.PORT || 2020, function() {
  console.log('listening on port 2020!');
});