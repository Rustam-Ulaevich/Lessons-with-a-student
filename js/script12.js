// Function Expression  Function Declaration

// function sayHi(){              // Function Declaration
//    return console.log('Hi!!!')   
// }

// sayHi()

// let sayHi2 = function(){       // Function Expression
//     return console.log('Hi!!!')
// }

// sayHi2()
// let a = sayHi2
// console.log(a())

// Колбэк-функции    Callback-обратный вызов

// function ask(question, yes, no){
//     if(confirm(question)){
//        yes() 
//     } else {no()}
// }


// function showOk(){
//     console.log('You say Ok');    
// }

// function showNo(){
//     console.log('You say No');    
// }

// ask('Вы согласны?', showOk, showNo)


//Отличия Function Expression  Function Declaration

// sum(2, 3) // Function Declaration можем вызвать ЗАРАНЕЕ

// function sum(a, b){
//     console.log(a+b)
// }

// sum2(2, 3)


// let sum2 = function(a, b){
//     console.log(a*b);    
// }

// sum2(2, 3)

// Стрелочные функции

// const sum = (a, b) => console.log(a+b)
// const sun = function(a, b){console.log(a+b)}

// sum(4,9)
// sun(4,9)

let age = prompt('Сколько Вам лет?', 18)

let result = age<18 ? 
    ()=>console.log('подросток') : 
    () => {}

alert(result())

