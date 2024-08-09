// //........................................................................................//
// //---------------------------------------LOOPS---------------------------------------//
// // while loop
// var count = 0
// while (count < 5){
//     console.log("Count:" + count)
//     count++
// }
// // do-while Loop
// var count = 0
// do{
//     console.log("Count:" + count)
//     count++
// }while (count < 5)
// // for loop
// for (var i = 0; i < 5; i++){
//     console.log("Count:" +i)
// }
// // for loop & if else statement
// for (var i = 10; i > 5; i--){
//     if(i == 6){
//         document.write("Count:" +i)
//     }else
//     {
//         console.log("no value")
// }
// }
//  loop within a loop
// for (var i = 0; i < 5; i++){
//     for (var m = 1; m < 5; m++)
//     {
//     console.log("inner loop" +m)

// }
// console.log("outer loop:" +i)
// var add = m+i
// console.log(add)
// }
//........................................................................................//
//---------------------------------------FUNCTION & EVENT---------------------------------------//
// function myFunction(){
//    console.log('hello! this is myFunction')
//    document.getElementById('idFunction').innerHTML=
//    '<p>This Function block paragraph first<p/>'
// }
// myFunction()
//........................................................................................//
function addtext(){
    var text = document.getElementById('myElement')
     text.innerHTML = 'Welcome to the world of coding'
}
// problem 1 //
function changebgcolor(){
    let chng =document.body
    chng.style.backgroundColor = 'yellow'
}
var element = document.getElementById('myElement')
element.innerHTML = 'JS WORLD'
// onClick EVENT //
function clickHere(){
    var element = document.getElementById('myElement')
    element.innerHTML = 'I am working on Html CSS & JS :)!'
    element.style.color = 'orange'
}
// onSubmit EVENT //
function submitHere(){
    alert ('The form is submitted')
}
// mouseOver EVENT //
function mouseOver(){
    var result = document.getElementById('result')
    result.innerHTML = 'Mouse Over'
    result.style.color = 'pink'
}
// mouseOut EVENT //
function mouseOut(){
    var result = document.getElementById('result')
    result.innerHTML = 'Mouse Out'
    result.style.color = 'chocolate'
}
//  mouseOnChange EVENT //
function onChange(){
    var x = document.getElementById('mySelect').value
    document.getElementById('demo').innerHTML = "you selected:" + x
}
