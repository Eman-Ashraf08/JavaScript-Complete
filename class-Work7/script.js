//  Generator Functions //
function* numberGenerator(){
    yield 1;
    yield 2;
    yield 3;
}
const generator = numberGenerator()

console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())

// Curring in JS  (takes multiple arguments)(nested function)
function curriedAdd(a){
    return function(b){
        return a+b
    }
}
var add = curriedAdd(3)
console.log(add(2))
// ------
function calVol(length){
    return function(width){
        return function(hight){
            return length * width * hight
        }
    }
}
let volumeOfCube = calVol(4)(5)(6)
console.log("Volume of cube is ",volumeOfCube);

//  Hosting Function // in this function can call first then initialized
myFunction()
function myFunction(){
    console.log('I am hosted')
}

// Function Variable // but in variable it is not possible
// console.log(x)  //output (undefined)
var x = "this is a variable" 
console.log(x) //output (this is a variable)

// Function Expressions and Variables
// myExpression() // must show error (myExpression is not a function)
var myExpression = function(){
    console.log('Hello World')
}
myExpression()
// -----------------Examples----------------//

// Function Declaration -----//
console.log(add(10,23))
function add(a,b){
    return a + b;
}
// console.log(add(10,23))

// Function Expression -----//
console.log(subtract(10,23))  // (shows the error)
const subtract = function(a,b){
    return a - b;
}
// console.log(subtract(10,23))