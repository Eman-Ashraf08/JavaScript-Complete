// there are three constructor in js (Object, Array, Date, Number)
//-----Object (it id also a variavle)-----// used to store two or more values in a variable
// // Object Constructor //
// var Book = new Object()
// Book.subject = 'Harry Potter'
// Book.author = 'J.K Rowlling'
// document.write('Book Name is :' + Book.subject + "<br>")
// document.write('Book Author is :' + Book.author + "<br>")

// var chair = new Object()
// chair.material = "Wood"
// chair.color ="Black and Brown"
// console.log(chair.material, chair.color)

// function myClass(name, age){
// var x = "hello world"
// console.log(x , name , age)
// }

// // use of 'This' keyword in Object // user define object
// function book(title, author){
//     this.title = title
//     this.author = author
//     console.log(this)
// }
// book.prototype.language = "English"
// var mybook = new book("Peral", " Mohan")
// document.write("Book title is:" + mybook.title + "</br>")
// document.write("Book Author is:" + mybook.author + "</br>")
// document.write("Book language is:" + book.prototype.language + "</br>")

// function student(Name, Id, Class){
// this.Name = Name
// this.Id = Id
// this.Class = Class
// console.log(this)
// }
// var student1 = new student("John", 12345, "Class A")
// var student2 = new student("Doe", 12346, "Class B")
// var student3 = new student("JD", 12347, "Class C")
// document.write("Name:" + student1.Name , "Id:" + student1.Id, "Class:" + student1.Class + "</br>")
// document.write("Name:" + student2.Name , "Id:" + student2.Id, "Class:" + student2.Class + "</br>")
// document.write("Name:" + student3.Name , "Id:" + student3.Id, "Class:" + student3.Class + "</br>")
//--------------functionalty method of object--------------//
// const person={
//     firstName: "Eman",
//     lastName: "Ashraf",
//     age: 18,
//     major: "Computer Science",
//     getFullName: function(){
//         return this.firstName 
//     }
// }
// console.log(person.firstName)
// console.log(person.lastName)
// console.log(person.age)
// console.log(person.major)
// person.email ="efpaemi@gmail.com"
// delete person.email  //for deleting
// console.log(person.email)
// // check is this object is blonging which constuctor // //
// console.log(person.constructor)
// //----------- with keyword -----------//
// function addAge(number){
//     // this.age = number
//     with(this){
//         age = number
//         }

// }

// function student (name){
//     this.name = name
//     this.age = 0
//     this.addAge = addAge
// }
// ------------------------------------------------------------
// var firstStudent = new student('Eman')
// firstStudent.addAge(18)
// console.log(firstStudent)

// function Country(name){
//     this.name = name
// }
// Country.prototype.language = "urdu"
// console.log(Country.prototype)
// const country_one = new Country ('Pakistan')
// country_one.city = "faisalabad"
// console.log(country_one.name)
// console.log(country_one)
// const country_two = new Country ('USA')
// console.log(country_two)
// --------------------------------------------------------------


// // another Method to access the property of Object-------//
// const userobject = {
//     Name:'Stella',
//     Age:34
// }
// console.log(userobject['Age'])
// console.log(userobject['Name'])

// // Number Object use for chnges (like: numbers, strings or float) (Methods of number objects)
// const num1 = 143
// console.log(num1)
// const num2 = new Number(42)
// console.log(num2.constructor)
// const num3 = new Number(12334.34)
// console.log(num3.toExponential())
// console.log(num3.toFixed())
// console.log(num3.toString(2))
// console.log(num3.toLocaleString())
// console.log(num3.valueOf())
// console.log(num3.toPrecision(2))
// // // proporties of number object
// console.log(Number.MAX_VALUE)
// console.log(Number.MIN_VALUE)
// console.log(Number.NaN)
// console.log(Number.POSITIVE_INFINITY)
// console.log(Number.NEGATIVE_INFINITY)

// // Boolean Object
// const booleanObj = new Boolean(false)
// console.log(booleanObj)
// console.log(booleanObj.valueOf())
// console.log(booleanObj.toString())
// console.log(booleanObj.constructor)
// console.log(Boolean)
// console.log(booleanObj.constructor === Boolean)

// // String Object
// const stringObj = new String("Welcome to my World!!")
// console.log(stringObj)
// console.log(stringObj.length)
// console.log(stringObj.charAt(8))
// console.log(stringObj.charCodeAt(6))
// console.log(stringObj.concat("yepyep"))
// console.log(stringObj.indexOf('W'))
// console.log(stringObj.lastIndexOf('l'))
// console.log(stringObj.match('my'))
// console.log(stringObj.replace("my" , "your"))
// console.log(stringObj.search('my'))
// console.log(stringObj.slice(3,10))
// console.log(stringObj.split("",7))
// console.log(stringObj.toUpperCase())
// console.log(stringObj.toLocaleLowerCase())
// console.log(stringObj.toLocaleUpperCase())
// console.log(stringObj.constructor)

// function myString(name){
//    name = "Eman"
//    console.log(name.toUpperCase().charAt(2).replace("A" , "N"))
//    console.log(name.concat("yepyep"))
// }
// myString(name)

// var Book = new Object()
// Book.subject = 'Harry Potter'
// Book.author = 'J.K Rowlling'
// Book.price = 1500
// Book.authentication = true
// console.log(Book.subject.toUpperCase())
// console.log(Book.price.toString(3))
// console.log(Book.authentication.valueOf())

// var str1 = new String("my new work on string")
// var index = str1.lastIndexOf('new')
// document.write('lastIndexOf found string :' + index)
// document.write("</br>")
// var index = str1.lastIndexOf("new")
// document.write("lastIndexOf found string :" + index)


// // --------------- Window Objescts ---------------//
// let x = window.innerWidth
// console.log(x)
// console.log(window.location.hostname)
// console.log(window.location.href)
// console.log(window.location.pathname)
// console.log(window.location.protocol)
// console.log(window.location.port)