//Window objects
//onplay and onpause
var myplaylist= document.getElementById("myplaylist")
var playButton = document.getElementById("playButton")
var pauseButton = document.getElementById("pauseButton")
myplaylist.onplay = function() {
  console.log("Audio started playing")
}
myplaylist.onpause = function() {
  console.log("Audio paused")
}
 //alert
 alert('You are About to Die....!')
//promt
 prompt('Are You wanna Die?')
// Document
document.body.style.backgroundColor = 'grey'
playButton.addEventListener("click", function() {myplaylist.play()})
pauseButton.addEventListener("click", function() {myplaylist.pause()})
//changeText
function changeText() {
    var mybutton = document.getElementById("button")
    mybutton.textContent = "Text changed!"
  }
// mouseOnChange
function onChange(){
     var x = document.getElementById('mySelect').value
     document.getElementById('demo').innerHTML = "you selected:" + x
     }
//mouseOver EVENT 
function mouseOver(){
    var result = document.getElementById('result')
    result.innerHTML = 'Mouse Over'
    result.style.color = 'Blue'
}
// mouseOut EVENT 
function mouseOut(){
    var result = document.getElementById('result')
    result.innerHTML = 'Mouse Out'
    result.style.color = 'red'
}
//onsubmitt
function submitHere(){
    alert ('Your Death Certificate....submitted.....')
}
//setTimeout
console.log(window)
function delayedCode() {
    console.log("Kesa laga mera mazak")
  }
  setTimeout(delayedCode, 2000)
//onsubmitt
function submitHere(){
    alert ('Your Death Certificate....submitted.....')
}