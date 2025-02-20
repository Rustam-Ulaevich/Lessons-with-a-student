// Логические операторы 
//  || ИЛИ
//  &&  И
//  !  НЕ

let num1 = false || false || !'карта' || false
//  console.log(num);

// console.log(true || true);   //true
// console.log(false || true);  //true
// console.log(true || false);  //true
// console.log(false || false); //false

// if(1 || 0){    // (true || false)
//   console.log(111);  
// }
// let hour = 18

// hour<10 || hour>18 ? console.log('Офис закрыт') : console.log('Офис открыт')

// console.log( 
//   hour<10 || hour>18 
//   ? 'Офис закрыт' 
//   : 'Офис открыт'
// );

// if( hour<10 || hour>18 ){  // (true || false)
//   console.log('Офис закрыт');  
// }else{console.log('Офис открыт');
// }

// let result = false || 6<5 || undefined || 'sdfghsdf' || '' || !1;
// console.log(result);

// console.log( 1 || 0 );                   
// console.log( true || 'какая-то строка' );
// console.log( null || 1 );
// console.log( null || 0 || 1 );
// console.log( undefined || null || 0  );

//Сокращённое вычисление.
// !true || alert("никогда не сработает");
// false || alert("сработает");


// ||= (Логическое присваивание ИЛИ)

// let parol = 123
// let parolUser = Number(prompt('Введите пароль', 0)) //453

// //              123   =   453
// let proverka = parol === parolUser // false
// proverka ||= 'не авторизован'

// console.log(proverka);


// оператор  &&  И

// let egipet = 'pasport' && 'bilet' && 'viza'

// console.log(true && true);  //true
// console.log(true && false); //false
// console.log(false && true); //false
// console.log(false && false); //false

// console.log(1 || false || 6);
// console.log(1 && false && 6);
// console.log(0 || null || '' || undefined);
// console.log(0 && null && '' && undefined);
// console.log(!0 && 5 && 'false' && 'Hello');
// console.log(!0 || 5 || 'false' || 'Hello');


// Приоритет оператора && больше, чем у ||
// a && b || c && d
// 1 * 5 + 5 * 8


// &&= (Логическое присваивание И)

// let a = 'Привет '
// let name = prompt('Введите своё имя')
// a &&= a + name
// console.log(a);

//  !  НЕ

// task
// console.log( null || 2 || undefined );
// console.log( alert(1) || 2 || alert(3));
// console.log( 1 && null && 2);
// console.log( alert(1) && alert(2));
// console.log( null || 2 && 3 || 4 );

// let value = NaN; //false
// // false ||=
// // true &&=

// value &&= 10;  // value = NaN
// value ||= 20;  // value = 20
// value &&= 30;  // value = 30
// value ||= 40;  // value = 30

// alert(value);

// let age = 14
//  if (age >= 14 && age <= 90) {
//     alert (`значение переменной age ${age} находится в диапазоне 14 и 90 включительно`)
//  } else {
//     alert (`значение переменной age ${age} HE находится в диапазоне 14 и 90 включительно`)
// }


// let user = prompt('Кто там?')

// if( user === 'Админ'){

//     let parol = prompt('Пароль?')

//     if(parol === 'Я главный'){
//         alert('Здравствуйте!')
//     }else if(parol === null || parol === ''){
//         alert('Отменено')
//     }else{
//         alert('Неверный пароль')
//     }

// }else if ( user === null || user === ''){
//     alert('Отменено')

// }else(
//     alert('Я Вас не знаю')
// )










