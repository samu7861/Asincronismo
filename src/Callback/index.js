function sum(num1, num2){
    return num1+num2
}

function calc(num1, num2, callback){
    return callback(num1, num2)
}

console.log(calc(2,2,sum))

setTimeout(()=>{
    console.log("hola mundo")
}, 5000)

function greetings(name){
    return console.log(`hola ${name}`)
}

setTimeout(greetings, 2000, "samu")