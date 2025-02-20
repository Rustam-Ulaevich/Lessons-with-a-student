// Операторы нулевого слияния и присваивания: '??', '??='

// let a = null
// let b = 6
// let result

// result = a ?? b

// result = ( a != null && a != undefined ) ? a : b

// if(a != null && a != undefined ){
//     result = a
// }else{
//     result = b
// }

// let firstName = 10564654231;
// let lastName
// let nickName = "Суперкодер";

// alert( firstName ?? lastName ?? nickName ?? 'Аноним')


//Оператор нулевого присваивания (??=)

// let userAge = null;

// if (userAge === null || userAge === undefined) {
//   userAge = 18;
// }

// userAge ??= 18 //  оператор ??= присвоит 18 если userAge не определено (null или undefined)


let userAge;

userAge ??= alert("не сработает");
userAge ??= 21;                   
userAge ??= null;                 

alert(userAge)
