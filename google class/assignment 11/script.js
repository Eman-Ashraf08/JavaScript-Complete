// Asynchronous
console.log("Im writing the assignment")
setTimeout(()=>{
    console.log('Assignment is done')
},3000)
console.log("Wating....")
// CallBack
function functionOne(callback){
    const name = callback()
    console.log(name)
}
function functionTwo(){
    return "Eman"
}
functionOne(functionTwo)
// Promoise
const Pro = new Promise((resolve,reject)=>{
        // console.log(resolve("Promise resolved!"))
        console.log(reject("Promise rejected!"))
    })
Pro
    // .then((result)=>
    // console.log(result)
    // )
    .catch((error)=>
    console.error(error)
    )
// API Fetch
fetch("https://jsonplaceholder.typicode.com/posts/11")
.then(res => res.json())
.then(data => console.log(data))
.catch (error => console.log("Error"))
