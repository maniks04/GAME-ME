
var Algo = function() {
    const twentyProblemArray = []
  
    var multiply = function () {
      var numberOne = Math.round(Math.random() * (15))
      var numberTwo = Math.round(Math.random() * (15))
      let multiplyObject = {}
      multiplyObject.problem = numberOne + '*' + numberTwo
      multiplyObject.result = JSON.stringify(numberOne * numberTwo)
   
      twentyProblemArray.push(multiplyObject)
  }

  var add = function(){
    var numberOne = Math.round(Math.random() * (50))
      var numberTwo = Math.round(Math.random() * (50))
      let multiplyObject = {}
      multiplyObject.problem = numberOne + '+' + numberTwo
      multiplyObject.result = JSON.stringify(numberOne + numberTwo)
   
      twentyProblemArray.push(multiplyObject)
  }

  var subtract = function() {
    var numberOne = Math.round(Math.random() * (100))
    var numberTwo = Math.round(Math.random() * (numberOne-1))
    let multiplyObject = {}
    multiplyObject.problem = numberOne + '-' + numberTwo
    multiplyObject.result = JSON.stringify(numberOne - numberTwo)
 
    twentyProblemArray.push(multiplyObject)
  }
  
  
  
  // var divide = function() {
  //     return 'divide'
  // }
  
    
    while (twentyProblemArray.length !== 15) {
      var startNumber = Math.round(Math.random() * (4 - 1) + 1)
        if (startNumber === 1) {multiply()}
         if (startNumber === 2) {add()}
         if (startNumber === 3) {subtract()}
         //if (startNumber === 4) {divide()}
    }
    
    return twentyProblemArray
  }

  module.exports = Algo