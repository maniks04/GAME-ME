
var Algo = function() {
    const twentyProblemArray = []
  
    var multiply = function () {
      let multiplyObject = {}
      multiplyObject.numberOne = Math.round(Math.random() * (12))
      multiplyObject.sign = '*'
      multiplyObject.numberTwo = Math.round(Math.random() * (12))
  
      twentyProblemArray.push(multiplyObject)
  }
  
  // var add = function() {
  //     return 'return'
  // }
  
  // var subtract = function() {
  //     return 'subtract'
  // }
  
  // var divide = function() {
  //     return 'divide'
  // }
  
    
    while (twentyProblemArray.length !== 20) {
      var startNumber = Math.round(Math.random() * (4 - 1) + 1)
        if (startNumber = 1) {multiply()}
        // if (startNumber = 2) {add()}
        // if (startNumber = 3) {subtract()}
        // if (startNumber = 4) {divide()}
    }
    
    return twentyProblemArray
  }

  module.exports = Algo