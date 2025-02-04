// let num = 1
// console.log(num);
// num = 2
// console.log(num);
// num = 'Ufa'
// console.log(num);
// num = true
// console.log(num);
//JavaScript  TypeScript

// console.log(-1 / 0); //-Infinity
// console.log( NaN + 1);

// let num = 1
// num = 1165454165n

// console.log(typeof num);
//console.log(typeof(num));

// let otvet = prompt('Как дела?')
// alert(otvet)
alert("Вам нужно пройти анкету, готовы?")//+
let name = prompt("Как вас зовут?")//+
let age = Number(prompt("Сколько вам лет?"))//+
let conf = confirm("Согласны ли вы передать свои данные для дальнейшей обработки?") // true/false

if (conf){
    alert(`Уважаемая  ${name}  в следующем году вам исполнится ${age + 1} годиков`)
}
else {
    alert(`Вы душнила!!!`)
}




