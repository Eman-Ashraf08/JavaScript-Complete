// // Question # 1
// function func1(callback){
//    setTimeout(callback,3000)
// }
// function func2(){
//     console.log("callback with setTimeOut function is executed!")
// }
// func1(func2)
// // Question # 2
// const x = () =>{
// console.log("Hello World");
// }
// setTimeout(x,4000)
// //---------------------------
// function Drinks(drinkName){
//   setTimeout(()=>{
//     console.log(`${drinkName} is ready`);
// }, Math.random()*4000)
// }
// Drinks('Coffee')
// Drinks('Ice Tea')
// Drinks('Coktail')
// Drinks('Milk Shakes')
// // Question # 3
// const firstFunction =(callback) => {
//     setTimeout(() => {
//         const data = { id: 1, name: "Sample Data" };
// callback(data)
//     }, 1000); 
//   };

//   const secondFunction = function (data) {
//     console.log ("Object data show:", data);
//   }
//   firstFunction(secondFunction)
// // Question # 4
// window.onload = function() {
//     const form = document.getElementById("myForm");
//     const nameInput = document.getElementById("name");
//     const emailInput = document.getElementById("email");
//     const storedname = localStorage.getItem("name")
//     const storedemail = localStorage.getItem("email")

// if(storedname){
//    console.log(storedname)
// }
// if ( storedemail){
//    console.log(storedemail)
//  }


//     form.addEventListener("submit", function(e) {
//         e.preventDefault();

//         // Store values in localStorage
//         localStorage.setItem("name", nameInput.value);
//         localStorage.setItem("email", emailInput.value);
//             console.log("storedname", localStorage.getItem ("name"))
//             console.log("storedemail", localStorage.getItem ("email"))
      
//     });
// };

// --------------------------------
// // Question # 5
// function delayedFunction() {
//    document.body.style.backgroundColor = "orange"
// }

// console.log("This message will be printed immediately.");

// setTimeout(delayedFunction, 2000);


