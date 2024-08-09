// OBJECT //
var chair = new Object()
chair.material = "Wood"
chair.color ="Black and Brown"
console.log(chair.material, chair.color)

// use of 'This' keyword in Object 
 function student(Name, Id, Class){
    this.Name = Name
    this.Id = Id
    this.Class = Class
    console.log(this)
    }
    var student1 = new student("John", 12345, "Class A")
    var student2 = new student("Doe", 12346, "Class B")
    var student3 = new student("JD", 12347, "Class C")
    document.write("Name:" + student1.Name , "Id:" + student1.Id, "Class:" + student1.Class + "</br>")
    document.write("Name:" + student2.Name , "Id:" + student2.Id, "Class:" + student2.Class + "</br>")
    document.write("Name:" + student3.Name , "Id:" + student3.Id, "Class:" + student3.Class + "</br>")

//----------- with keyword -----------//
function addAge(number){
    // this.age = number
    with(this){
        age = number
        }
}
function student (name){
    this.name = name
    this.age = 0
    this.addAge = addAge
}
var firstStudent = new student('Eman')
firstStudent.addAge(18)
console.log(firstStudent)

//--------------functionalty method of object--------------//
const person={
    firstName: "Eman",
    lastName: "Ashraf",
    age: 18,
    major: "Computer Science",
    getFullName: function(){
        return this.firstName 
    }
}
console.log(person.firstName)
console.log(person.lastName)
console.log(person.age)
console.log(person.major)
person.email ="efpaemi@gmail.com"
delete person.email  //for deleting
console.log(person.email)
// check is this object is blonging which constuctor // //
console.log(person.constructor)

// Dilog Box //
var x = "student"
alert(x)
// promot use for input values //
var y = "this is my pormote value"
prompt(y)
var z = prompt ("Enter your name :" ,"you name here")
console.log(z)
document.write("you have entered : " + z)
confirm("this value is confirm")
function myConfirm(){
    var result = confirm('Are you sure?')
    if (result == true){
        document.write("yes!")
        return true
    }
    else{
        document.write("nope!")
        return false
    }
}
myConfirm()