
var Algo = function() {
    const twentyProblemArray = []
  
    var multiply = function () {
      var numberOne = Math.round(Math.random() * (3))
      var numberTwo = Math.round(Math.random() * (3))
      let multiplyObject = {}
      multiplyObject.problem = numberOne + '*' + numberTwo
      multiplyObject.result = numberOne * numberTwo
   
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
  
    
    while (twentyProblemArray.length !== 5) {
      var startNumber = Math.round(Math.random() * (4 - 1) + 1)
        if (startNumber = 1) {multiply()}
        // if (startNumber = 2) {add()}
        // if (startNumber = 3) {subtract()}
        // if (startNumber = 4) {divide()}
    }
    
    return twentyProblemArray
  }

  module.exports = Algo