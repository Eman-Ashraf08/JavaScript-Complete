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
