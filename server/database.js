// var mysql = require('mysql')

// var connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'gameme'
// })

// connection.connect()

// module.exports = connectionvar express = require('express');

const mongoose = require('mongoose');

mongoose.connect('mongodb://manik:mshoops04@ds237947.mlab.com:37947/testtt')


let userSchema = mongoose.Schema({
  user: String,
  time: String
});

 let User = mongoose.model('User', userSchema)

let save = (param, callback) => {
    var newUser = new User(param)
    newUser.save(callback)
}


let find = (callback) => {
  User.find().then((results) => {
   // so then u check what mongoose.find returns by looking at the docs and thats it lol true that dude!! 
   //have a good workput man thanks ima disconnect
    callback(results)// ok it works  hoow do u figure these things out man
    // my brain is a computer    cmmmoooonnn 
    // lol i told u man, u just follow the path of breadcrumbs
    // start from where u made the request then follow the chain
    //add a bunch of console logs to make sure the data ur sending is passing thru
    // so for .find.then theres only results set back no err item //save 
  })
}


module.exports.find = find
module.exports.save = save
//mongoose.connect('mongodb://manik:mshoops04@ds237947.mlab.com:37947/testtt')


//save again back toseevr hit save
    
   





