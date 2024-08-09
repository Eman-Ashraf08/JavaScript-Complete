// //  Arrrow Function
// const multiply = (a,b) => a*b
// console.log(multiply(10,23))
// // Asynchronous JS  (promis,asycn/await)
// console.log("Order a Cup of Coffee")
// setTimeout(()=>{
//     console.log('Coffee is ready!')
// }, 5000)
// console.log('wating for order...')
// //Example -------
// function cookDish(dishName){
//     setTimeout(()=>{
//         console.log(`${dishName} is ready`)
//     }, Math.random()*2000)
// }
// cookDish('Pizza')
// cookDish('Burger')
// cookDish('Coktail')
// // ----------
// // CallBack  (call stack, call queue)
// function fun1(callback){
//    console.log(callback())
// }
// function Fun2(){
//     let a,b
//     a = 10
//     b = 13
//     return a + b
//     // console.log('Callback function has been called!')
// }
// fun1(Fun2)

// // Promises
// // creating the promise
// const myPromise = new Promise((resolve,reject)=>{
//     // console.log(resolve("Promise resolved!"))
//     console.log(reject("Promise rejected!"))
// })
// // using the promise
// myPromise
    // .then((result)=>
    // console.log(result)
    // )
    // .catch((error)=>
    // console.error(error)
    // )
//     .finally(()=>{
//         console.log('Finished with promises!')
//     })

// // Async/await
// async function fetchData(){
//     const response = await fetch('https://fakestoreapi.com/products')
//     const data = await response.json()
//         console.log(data)
// }
// fetchData()


// try/catch(use for error handling)
async function fetchData(){
    try{   
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json()
            console.log(data)
    }
    catch (error){
        console.error("An Error Occurred:" , error)
        throw error
    }
}
fetchData()