// // // // Retrieve the JSON data from Local Storage
const storedData = localStorage.getItem("user");
const storedData2 = localStorage.getItem("user2");
console.log(storedData)
console.log(storedData2)

if (storedData) {
//     Parse the JSON data back to a JavaScript object
    const parsedData = JSON.parse(storedData);
console.log(parsedData)

document.write (storedData)

    console.log(parsedData.password);
    console.log(parsedData.email); 
} 
else {
    console.log("No user data found.");
}


if (storedData2) {
//     Parse the JSON data back to a JavaScript object
    const parsedData2 = JSON.parse(storedData2);
console.log(parsedData2)

document.write (storedData2)

    console.log(parsedData2.password);
    console.log(parsedData2.email); 
} 
else {
    console.log("No user data found.");
}
////////////////////////////////////make a code readable clean////////////////////////////////////
// // // // //   Destructing by store the value of array in variables // // // // //

const num1 = [1,2,3]
const [ one ,two ,three] = num1

console.log (one)
console.log (two)
console.log (three)

// // // // // using rest operator
const color = ['red','blue','orange','green']
const [first,second,...remaining] = color
console.log(first)
console.log(second)
console.log(remaining)
// // // // // // syntax of object destructor // // // // 
// Examples of Extracting Values
// // 1 // // //
const person = { 
    firstName: 'Eman', 
    age: 18
 };

const { firstName, age } = person

console.log(firstName)
console.log(age)
// // 2 // // // 
const book = { 
    title: 'Harry Potter', 
    author: 'J. K. Rowling' 
};

const { title: bookTitle, author: bookAuthor } = book

console.log(bookTitle)
console.log(bookAuthor)  

// // 3 // // / /
const student = { Name: 'Eman', age: 18, major: 'Computer Science' }

const { Name, ...info } = student

console.log(Name)
console.log(info)

// // // // // de structing string into character // // // // // // 
// string
const word = 'Hello'

const [firstChar, secondChar, ...restChars] = word

console.log(firstChar)
console.log(secondChar)    
console.log(restChars)     


// Using Rest Operator
const sentence = 'JavaScript is amazing!'
const [firstWord, ...remainingWords] = sentence.split(' ')

console.log(firstWord)
console.log(remainingWords)
// // // // // spread operator// // // // //
const array1 = [1, 2, 3]
const array2 = [4, 5, 6]

const mergedArray = [...array1, ...array2]; // [1, 2, 3, 4, 5, 6]
console.log(mergedArray)


const obj1 = { a: 1, b: 2 }
const obj2 = { b: 3, c: 4 }

const mergedObject = { ...obj1, ...obj2 }
console.log(mergedObject)

// // // // // // Generator function for resume // // // // //
// example1
function* numberGenerator(){
  yield 1;
  yield 4;
  yield 5;
}
const generator = numberGenerator()
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
//example2
function* Generator(i){
  yield i;
  yield i + 10;
  
}
const gen = Generator(10)
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
//example 3
function* idMaker() {
    let index = 0;
    while (true) {
      yield index++;
    }
  }
  
  const gen1 = idMaker();
  
  console.log(gen1.next().value); // 0
  console.log(gen1.next().value); // 1
  console.log(gen1.next().value); // 2
  console.log(gen1.next().value); // 3
  
// // // // // Curring in JS takes multiple arguments // // // //  //
//example1
function currirdAdd(a){
  return function(b){
    return function(c){
      return a+b+c;
    }
  }
}
let addThreeNumbers = currirdAdd(6);
console.log(addThreeNumbers(6)(7))
//example2
function calculateVolume(length){
  return function (breadth){
    return function (height){
      return length * breadth * height;
    }
  }
};
let volumeOfCube = calculateVolume(7)(8)(9);
console.log(`volume of cube is ${volumeOfCube}`);

// // // // //Hoisting // // // // // // //
// example1  function
myFunction ()

function myFunction() {
  console.log('hello world')}

//example2 function experation and variable

myFunction ()

var myFunction = function() {
  console.log('hello world')
} //throw an error bcz its a variable

//example 3 variable hosting

// console.log(x) //throw an error
var x = 29
console.log(x)
//acess technique // // //
const userobject = {
  Name: 'Stella ',
  age : 34
}
console.log(userobject['age']);