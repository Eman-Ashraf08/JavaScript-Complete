//  ---------------FUNCTIONS & EVENTSa-------------//
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