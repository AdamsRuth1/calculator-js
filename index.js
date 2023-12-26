
let num1 = 10
let num2 = 40
document.getElementById("num1").innerText = num1
document.getElementById("num2").innerText = num2

function add(){
    let sum = num1 + num2
    document.getElementById("result").innerText = sum
    console.log(sum)
}

function sub(){
    let sum = num2 - num1
    document.getElementById("result").innerText = sum
    console.log(sum)
} 

function div(){
    let sum = num2 / num1
    document.getElementById("result").innerText = sum
    console.log(sum)
} 

function multiplicatio(){
    let sum = num2 * num1
    document.getElementById("result").innerText = sum
    console.log(sum)
} 