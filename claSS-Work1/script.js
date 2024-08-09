// // for declaring variables 3 variables var (global) let and const(local)
const x = 5
let y = 8
// y = 9
// var z = 'boom'
// console.log(x, y, z)
// document.write(x, y, z)
// //alert(z)
// // addition
//  sum = x + y;
// console.log(sum)
// document.write(sum)
// // subtraction
// sub = x - y;
// console.log(sub)
// document.write(sub)
// // multiplication
// mul = x * y;
// console.log(mul)
// document.write(mul)
// // division
// div = x / y;
// console.log(div)
// document.write(div)
// // remainder
// rem = x % y;
// console.log(rem)
// document.write(rem)
// exponentiation
// exp = x ** y;
// console.log(exp)
// document.write(exp)
// equal to
// console.log(x==y)
// document.write(x==y)
// // not equal to
// console.log(x!=y)
// document.write(x!=y)
// // grater than equal to
// console.log(x>=y)
// document.write(x>=y)
// // less than equal to
// console.log(x<=y)
// document.write(x<=y)
// // logical operators
// // AND operator
// console.log(x > 0 && y < 10);
// document.write(x > 0 && y < 10);
// // OR operator
// console.log(x > 0 || y < 10);
// document.write(x > 0 || y < 10);
// // NOT operator
// console.log(!(x > 0 ));
// document.write(!(x > 0 ));
// // Assignment Operator
// // Simple Assignment
// let a=x
// console.log(a);
// document.write(a);
// // Addition assignment
// a += 3;
// console.log(a);
// document.write(a);
// // Subtraction assignment
// a -= 2;
// console.log(a);
// document.write(a);
// // Multiplication assignment
// a *= 10;
// console.log(a);
// document.write(a);
// // Division assignment
// a /= 10;
// console.log(a);
// document.write(a);

// // var name = 'Eman'
// // console.log(name)
// // document.write(name)
// // var num1 = 12
// // var num2 = 13
// // var sum = num1 + num2
// // console.log(sum)
// // document.write(sum)
// // const PI = 3.1416
// // var radius = 8
// // var circleArea = PI * radius * radius
// // console.log(circleArea)
// // document.write(circleArea)
// // var y = 7

// if (y < 0){console.log('Negative')}
// else if(y > 0){console.log('postive')}
// if(y == 0){console.log('Zero')}

    // VARIABLES CLASS ASSIGNMENT
// var message = "hello World"
// console.log(message)
// let message = "hello World"
// console.log(message)
// const message = "hello World"
// console.log(message)

// var score = 85
// console.log(score)
// let score = 85
// console.log(score)
// const score = 85
// console.log(score)

// var x = 5
// var y = 10
// var sum = x + y
// console.log(sum)
 
    // OPERATORS CLASS ASSIGNMENT
    // ARTHMATIC
// var x = 3
// var y = 4
//     // ADDITION 
// var addition = x + y
// console.log(addition)   
//     // SUBTRACTION  
// var subtraction = x - y    
// console.log(subtraction)
//     // MULTIPLACTION
// var multiplication = x * y
// console.log(multiplication)  
//     // DIVISION
// var division = x / y
// console.log(division)
//     //MODULUS
// var modulus = x % y
// console.log(modulus)     
//    //INCREMENT
// x++
// console.log(x)
//     //DECREMENT
// y--
// console.log(y)     

//     // ASSIGNMENT
// var a = 12
// var b = 30
//     // ADDITION 
// a += b
// console.log(a)
//    // SUBTRACTION
// a -= b
// console.log(a)
//    // MULTIPLACTION
// a *= b
// console.log(a)   
//    // DIVISION
// a /= b
// console.log(a)   
//     //MODULUS
// a %= b
// console.log(a)
//     //COMPARISON
// let  j = 10
// let  k = 20
//     // EUQAL TO
// console.log(j==k)
//     // NOT EQUAL TO 
// console.log(j!=k)    
//     // GREATER THAN
// console.log(j>k)
//     // LESS THAN
// console.log(j<k)
//     // GREATER THAN OR EQUAL TO
// console.log(j>=k)
//     // LESS THAN OR EQUAL TO
// console.log(j<=k)
//     // LOGICAL
// var e = 12
// var m = 14
//     //AND
// var em_and = (e < m) && (m != e)     
// console.log(em_and) 
//     //OR
// var em_or = (e > m) || (m == e)     
// console.log(em_or)
//     //NOT
// var em_not = (e > m) || (m == e)    
// console.log(!em_not)


//     // CONDITION STATEMENTS
//     // if_else_statement
// let temperature = 50
// if(temperature > 30) {
//     console.log("It's a hot day!")
// } else {
//     console.log("It's not a hot day.")
// }
// let hour = 14
// let greeting 
// if (hour < 12){
//     greeting = "Good Morning!"
// }  else if (hour < 19){
//     greeting = "Good Afternoon!"
// }   else {
//     greeting = "Good Evening!"
// }  
// console.log(greeting) 
    //  //switch statement
    //  let grades = 'B'
    //  switch(grades){
    //      case 'A':
    //          console.log('Excellent')
    //          break
    //      case 'B': 
    //          console.log('Good')   
    //          break
    //      case 'C': 
    //          console.log('Fair')   
    //          break
    //      case 'D': 
    //          console.log('Need Improvement')   
    //          break
    //      case 'F': 
    //          console.log('Fail')   
    //          break
    //          default:
    //          console.log("Invalid Grade")
    //  }     
//........................................................................................//
//---------------------------------------JS METHODS---------------------------------------//
//getElementById(id)
console.log (document.getElementById('paragraph'))
var paragraph = document.getElementById('paragraph')
console.log(paragraph)
//getElementsByClassName(myClass)
console.log(document.getElementsByClassName('heading'))
var heading = document.getElementsByClassName('heading')
console.log(heading[0])
console.log(heading[1])
console.log(heading[2])
//getElementsByTagName(tagName)
console.log(document.getElementsByTagName('h1'))
var h1 = document.getElementsByTagName('h1')
console.log(h1[0])
console.log(h1[1])
//querySelector  (just pick 1st values)
console.log(document.querySelector('h5'))
var h5 = document.querySelector('h5')
console.log(h5)
console.log(document.querySelector('#myid'))
var myid = document.querySelector('#myid')
console.log(myid)
console.log(document.querySelector('.myclass'))
var myclass = document.querySelector('.myclass')
console.log(myclass)
//querySelectorAll (picks all the values & id will be same as it is unique)
console.log(document.querySelectorAll('h5'))
var h5 = document.querySelectorAll('h5')
console.log(h5[0])
console.log(h5[1])
console.log(h5[2])
// console.log(document.querySelectorAll('#myid'))
// var myid = document.querySelectorAll('#myid')
// console.log(myid[0])
console.log(document.querySelectorAll('.myclass'))
var myclass = document.querySelectorAll('.myclass')
console.log(myclass[0])
console.log(myclass[1])
console.log(myclass[2])
// innerHTML
document.getElementById('demo').innerHTML = "MY whole WORLD"
// document.style
let red = document.getElementById('red')
red.style.color= 'red'
red.style.background= 'purple'
red.style.fontSize= '50px'
red.style.fontWeight= 'bold'
red.style.textAlign= 'center'
red.style.padding= '20px 20px 20px 20px'
let blue = document.getElementById('blue')
blue.style.backgroundColor='yellow'
blue.style.fontSize= '100px'
blue.style.textAlign= 'center'
blue.style.padding= '40px 40px 40px 40px'
