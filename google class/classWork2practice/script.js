// ------loop------ //
// while loop //
var x = 0
while(x < 5){
    console.log('x:' + x)
    x++
}
// do while loop //
var y = 1
do{
   console.log('y:' + y)
   x ++
}while(y < 5)
// for loop //
for (var i = 3; i < 7; i++){
    console.log('i:' +i)
}
// loop within a loop //
for (var a = 0; a <= 3; a++){
    for(var b = 0; b < 2; b++){
        console.log('inner loop:' +b)
    }
    console.log('outer loop:' +a)
}
var sum = a + b
console.log("sum:" + sum)
// -------function-------- //
function myWork(){
    console.log('AOA! this is my work')
    document.getElementById('myWork').innerHTML= 
    '<p>I am learning loops and functions</p>'
}
