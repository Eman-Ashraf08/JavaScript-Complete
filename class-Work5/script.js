// -------------> Understanding Arrays in JavaScript <---------

// console.log()
// const check = new Array(1,2,3,4) // Array constructor 
// console.log(check)


// const array = [] // declare 

// const number = [1,2,3,4,5] //initialize value
// console.log(number[0])

// const student = [20, 'fatima' , true]

// console.log(student)

// ---------> Apply Arrays Methods <-----------


// -------------> Concat() method 
// const concat_Syntax = array1.concat(array2, array3, ..., value1, value2, ...)


// const array1 = [1, 2, 3]
// const array2 = [4, 5, 6]
// const array3 = [7, 8, 9]

// const concat_Array = array1.concat(array2, array3);

// console.log(concat_Array );


// -------------> filter() method 

// const filter_Syntax = array.filter(callback(element, index, array), thisArg);


// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const evenNumbers = numbers.filter(function(number) {
//   return number % 2 === 0;
// });

// console.log(evenNumbers); 


// const students = [
//     { name: 'Alice', grade: 'A' },
//     { name: 'Bob', grade: 'B' },
//     { name: 'Charlie', grade: 'A' }
//   ];
  
//   const topStudents = students.filter(function(student) {
//     return student.grade === 'A';

//   });
  
//   console.log(topStudents);


// -------------> every() method 

// array.every(callback(element, index, array), thisArg);

// const numbers2 = [2, 4, 6, 8, 10];

// const allEven = numbers2.every(function(number) {
//   return number % 2 === 0;
// });

// console.log(allEven); // Outputs: true



// const students2 = [
//     { name: 'Alice', age: 21 },
//     { name: 'Bob', age: 19 },
//     { name: 'Charlie', age: 23 }
//   ];
  
//   const allAdults = students2.every(function(student) {
//     return student.age >= 18;
//   });
  
//   console.log(allAdults); // Outputs: true



// -------------> forEach() method 

// array.forEach(callback(currentValue, index, array), thisArg);



// const colors = ['red', 'green', 'blue'];

// colors.forEach(function(color, index) {
//   console.log(`Color at index ${index}: ${color}`);
// });

// // colors.forEach((color, index) => {
// //     console.log(`Color at index ${index}: ${color}`);
// //   });


// const person = {
//     name: 'Alice',
//     hobbies: ['reading', 'swimming', 'cooking'],
//     showHobbies: function() {
//       this.hobbies.forEach(function(hobby) {
//         console.log(`${this.name} enjoys ${hobby}`);
//       });
//     }
//   };
  
//   person.showHobbies();














// // Array methods Data methods local storage
// // -------------> indexOf() method 

//   // array.indexOf(searchElement, fromIndex);

// const fruits = ['apple', 'banana', 'orange', 'apple'];

// // const indexOfApple = fruits.indexOf('apple');
// // console.log(indexOfApple); // Outputs: 0
// // const indexOfApple2 = fruits.indexOf('apple', 1);
// // console.log(indexOfApple2); // Outputs: 3 (starting from index 1)



// // // -------------> join() method 
// // // array.join(separator);
// const commaSeparated = fruits.join();
// console.log(commaSeparated); // Outputs: 'apple,banana,orange'
// // const numbers = [1, 2, 3, 4, 5];
// const joinedNumbers = fruits.join(' () ');
// console.log(joinedNumbers); 



// const lastIndex = fruits.lastIndexOf('apple');
// // console.log(lastIndex); // Outputs: 3 (last occurrence of 'apple')
// const notFoundIndex = fruits.lastIndexOf('grape');
// // console.log(notFoundIndex); // Outputs: -1 (not found)
// const lastIndexFrom2 = fruits.lastIndexOf('apple', 2);
// // console.log(lastIndexFrom2);
// // backward move 





// // -------------> map() method 
// const numbers5= [1, 2, 3, 4, 5];
// const doubledNumbers = numbers5.map(function(number) {
//   return number * 2;
// });
// console.log(doubledNumbers); // Outputs: [2, 4, 6, 8, 10]



// // // -------------> pop() method 
// const fruits7 = ['apple', 'banana', 'orange'];
// const removedFruit = fruits7.pop();
// // console.log(removedFruit); // Outputs: 'orange'
// console.log(fruits7); // Outputs: ['apple', 'banana']


// // // -------------> push() method 
// const newLength = fruits7.push('orange', 'grape');
// console.log(fruits7); 



// // // -------------> reverse() method 
// const numbers7 = [1, 2, 3, 4, 5];

// numbers7.reverse();
// // console.log(numbers7); // Outputs: [5, 4, 3, 2, 1]


// // // -------------> shift() method 

// const fruits8 = ['apple', 'banana', 'orange'];
// const removedFruit8 = fruits8.shift();
// // console.log(removedFruit8); // Outputs: 'apple'
// // console.log(fruits8); // Outputs: ['banana', 'orange']


// // // -------------> slice() method 

// const newArray = array.slice(startIndex, endIndex);
// const numbers10 = [1, 2, 3, 4, 5];
// const slicedNumbers = numbers10.slice(1, 4);
// // console.log(slicedNumbers); // Outputs: [2, 3, 4]


// // // -------------> sort() method 

// const numbers12 = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3];
// numbers12.sort();
// console.log(numbers12); // Outputs: [1, 1, 2, 3, 3, 4, 5, 5, 6, 9]



// // -------------> splice() method 

// const removedElements = array.splice(startIndex, deleteCount, ...itemsToAdd);
// const colors4 = ['red', 'green', 'blue', 'yellow', 'orange'];
// const removedElements = colors4.splice(2, 2, 'purple', 'pink');
// // console.log(removedElements); // Outputs: ['blue', 'yellow']
// console.log(colors4); // Outputs: ['red', 'green', 'purple', 'pink', 'orange']



// // -------------> toString() method 

// const fruits20 = ['apple', 'banana', 'orange'];
// const fruitsAsString = fruits20.toString('shdhhc');
// console.log(fruitsAsString); // Outputs: 'apple,banana,orange'




// const length = fruits20.unshift( 'grape');
// console.log(length); 
// console.log(fruits20); 


// // -------------> reduce() method 

// const numbers30 = [1, 2, 3, 4, 5];
// const sum = numbers30.reduce(function(accumulator, currentValue) {
//   return accumulator + currentValue;
// });

// console.log(sum); 
// // Outputs: 15 (1 + 2 + 3 + 4 + 5)



// // -------------> reduceRight() method 

// const numbers40 = [1, 2, 3, 4, 5];

// const reversedSum = numbers40.reduceRight(function(accumulator, currentValue) {
//   return accumulator + currentValue;
// }, 0);

// // console.log(reversedSum); // Outputs: 15 (5 + 4 + 3 + 2 + 1)




// const currentDate = new Date();
// console.log(Date.prototype)

// const specificDate = new Date(2023, 7, 13, 15, 30, 0); 
// console.log(specificDate)



// const year = currentDate.getFullYear();
// console.log(year)

// const month = currentDate.getMonth(); 
// console.log(month)

// const day = currentDate.getDate();
// console.log(day)

// const hours = currentDate.getHours();
// console.log(hours)

// const minutes = currentDate.getMinutes();
// console.log(minutes)


// const seconds = currentDate.getSeconds();
// console.log(seconds)

// const dayOfWeek = currentDate.getDay(); 
// console.log(dayOfWeek) //sunday start with 0


// const formattedDate = currentDate.toLocaleDateString();   // E.g., "8/13/2023"
// console.log(formattedDate)

// const formattedTime = currentDate.toLocaleTimeString();   // E.g., "3:30:15 PM"
// console.log(formattedTime)

// const formattedDateTime = currentDate.toLocaleString();   // E.g., "8/13/2023, 3:30:15 PM"
// console.log(formattedDateTime)


// const today = new Date();
// const tomorrow = new Date(today);
// tomorrow.setDate(today.getDate() + 1);

// const timeDifference = tomorrow - today; // Time difference in milliseconds
// // console.log(timeDifference)



// // // Creating an object to be stored as JSON
// const userData = {
//     name: "John Doe",
//     age: 30,
//     email: "john@example.com"
// };

// // // Convert the object to JSON format
// const jsonData = JSON.stringify(userData);

// // // Store the JSON data in Local Storage with the key "user"
// localStorage.setItem("user", jsonData);


// // // Retrieve the JSON data from Local Storage
// const storedData = localStorage.getItem("user");
// console.log(storedData)

// if (storedData) {
// //     Parse the JSON data back to a JavaScript object
//     const parsedData = JSON.parse(storedData);
// console.log(parsedData)
//     // console.log(parsedData.name); // Output: "John Doe"
//     // console.log(parsedData.age);  // Output: 30
//     // console.log(parsedData.email); // Output: "john@example.com"
// } else {
//     console.log("No user data found.");
// }










// // De structuring (array , string , object) (Rest and spread operator)
// // syntax

// const [variable1, variable2, ...restVariables] = array;


// // // Basic Array Destructuring
// const numbers = [1, 2, 3];

// const [first, second, third] = numbers;

// console.log(first);  // 1
// console.log(second); // 2
// console.log(third);  // 3

// // Swapping Values
// let a = 5;
// let b = 10;

// [a, b] = [b, a];

// console.log(a); // 10
// console.log(b); // 5


// // Using the Rest Operator:
// const colors = ['red', 'green', 'blue', 'yellow', 'orange'];

// const [firstColor, secondColor, ...remainingColors] = colors;

// console.log(firstColor);        // red
// console.log(secondColor);       // green
// console.log(remainingColors);   // ['blue', 'yellow', 'orange']





// // syntax

// // const { property1, property2, ...restProperties } = object;



// // Examples of Extracting Values
// const person = { 
//     firstName: 'fatima', 
//     age: 15
//  };

// const { firstName, age } = person;

// console.log(firstName); // fatima
// console.log(age);       // 15

// const book = { 
//     title: 'Harry Potter', 
//     author: 'J. K. Rowling' 
// };

// const { title: bookTitle, author: bookAuthor } = book;

// console.log(bookTitle);   // Harry Potter
// console.log(bookAuthor);  // J. K. Rowling



// const student = { name: 'sana', age: 21, major: 'Computer Science' };

// const { name, ...info } = student;

// console.log(name);      // sana
// console.log(info);      // { age: 21, major: 'Computer Science' }


// // string
// const word = 'Hello';

// const [firstChar, secondChar, ...restChars] = word;

// console.log(firstChar);     // H
// console.log(secondChar);    // e
// console.log(restChars);     // ['l', 'l', 'o']


// // Using Rest Operator
// const sentence = 'JavaScript is amazing!';

// const [firstWord, ...remainingWords] = sentence.split(' ');

// console.log(firstWord);       // JavaScript
// console.log(remainingWords);  // ['is', 'amazing!']



// // Destructuring Unicode Characters

// const emoji = '😃🚀🌟';

// const [smiley, ...star] = emoji;
// console.log(smiley)
// console.log(star)
// document.write(smiley);   // 😃
// document.write(rocket);   // 🚀
// document.write(star);     // 🌟



// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];

// const mergedArray = [...array1, ...array2]; // [1, 2, 3, 4, 5, 6]
// console.log(mergedArray)


// const obj1 = { a: 1, b: 2 };
// const obj2 = { b: 3, c: 4 };

// const mergedObject = { ...obj1, ...obj2 }; // { a: 1, b: 3, c: 4 }
// console.log(mergedObject)