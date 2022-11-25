
//console.log(-4/0);
//console.log('string'+ 'fff');


//ОБЪЕКТЫ и МАССИВЫ

//const obj = {
   // name: 'John',
   // age: 25,
    //isMarried: false
//};
//console.log(obj.name);

//let arr = ['plum.png', 'orange.jpg', 'apple.bmp'];
//console.log(arr[1]);

//const far = [1, 2, 3];


//alert('hello')

// ВОПРОСЫ

// const result = confirm('are youhear?');
 //console.log(result);
// const answer = +prompt('vam est 18 let?', '18');
 //console.log(answer + 5);

 //const answers = [];

 //answers[0] = prompt('Ваше Имя', '');
// answers[1] = prompt('Ваша Фамилия', '');
 //answers[2] = prompt('Сколько вам лет?', '');

 //console.log(typeof(answers));

 //ИНТРОПОЛЯЦИЯ

 //const category = 'toys';

 //console.log('https//someurl.com/' + category);

 //console.log(`https//someurl.com/${category}/5`);

 //console.log('arr'+'-object');

 // ИНКРЕМЕНТ и ДЕКРЕМЕНТ
 //let incr = 10,
  //  decr =10;

//incr++;
//decr--;

//ОПЕРАТОРЫ И и ИЛИ
// && - И
// || - ИЛИ

//ОПЕРАТОР ОТРИЦАНИЯ
// !=, !==, 
//const fff = false;
// console.log(!fff);

//УСЛОВИЯ 3 вида записи
// if (4==4) {
//     console.log('ok');
// } else {
//     console.log('error');
// }

// const num = 50;
// if (num < 49) {
//     console.log('error');
// } else if (num > 100) {
//     console.log('big');
// } else {
//     console.log('ok');
// }

// const nomer = 50;
// switch (nomer) {
//     case 49:
//         console.log('NO');
//         break;
//     case 100:
//         console.log('NO');
//         break;
//     case 50:
//         console.log('yes');
//         break;
//     default:
//         console.log('Ouch!');
//         break;
// }

// const hamburger = true;
// const fries = true;

// if (hamburger && fries) {
//     console.log('Я сыт!');
// }

// console.log((hamburger && fries));

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;

// if (hamburger === 3 && cola === 2 || fries === 3 && nuggets) {
//     console.log('Все сыты!');
// } else {
//     console.log('Мы уходим');
// }

// console.log( 1 && 2 && 3 ); 3
// console.log( !1 && 2 || !3 ); false 
// console.log( 25 || null && !3 ); 25 
// console.log( NaN || null || !3 || undefined || 5); 5
// console.log( NaN || null && !3 && undefined || 5); 5
// console.log( 5 === 5 && 3 > 1 || 5); true

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;
 
// if (hamburger && cola || fries === 3 && nuggets) {
//    console.log('Done!');
// } else {
//     console.log('penis');
// }

//ЦИКЛЫ
//let num = 50;

// while (num < 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// } 

// while (num < 55);

//  for (let i = 1; i < 10; i++) {
//    if (i === 6) {
//       //break;
//       continue;
//    }
//     console.log(i);
    
//  }

// ВЛОЖЕННЫЙ ЦИКЛ
// написать цикл что бы в результате вышла пирамидка из *.
// *
// **
// ***
// ****
// *****
// ******

// let result = '';
// const lenght = 7;

// for (let i = 1; i < lenght; i++) {

//    for(let j = 0; j < i; j++) {
//       result += '*';
//    }

//    result += '\n';     //перенос строки \n
// }

// console.log(result);


// first: for (let i = 0; i < 3; i++) {
//    console.log(`First level: ${i}`);
//    for (let j = 0; j < 3; j++) {
//       console.log(`Second level: ${j}`);
//       for (let k = 0; k < 3; k++) {
//          if (k === 2) break first;
//          console.log(`Third level: ${k}`);
//       }
//    }
// } 


// for (let i = 5; i < 11; i++) {
//    console.log(i);
// }

// for (let i = 20; i > 9; i--) {
//    if (i === 13) {
//       break;
//    }
//    console.log(i);
// }

// for (let i = 2; i < 11; i++) {
//    if (i % 2 === 0) {
//       console.log(i);
//    }
// }


// for (let i = 2; i <= 16; i++) {
//    if (i % 2 === 0) {
//        continue;
//    } else {
//        console.log(i);
//    }
// }

// let i = 2;
// while (i <= 16) {
//    if (i % 2 === 0) {
//       i++;
//       continue;
//    } else {
//       console.log(i);
//    }
//    i++;
// }


// const massI = [];

// let massN = 0;
//   for (let i = 5; i < 11; i ++) {
//    massI[massN] = i;
//    massN++;
//   }
// console.log(massI);


// Заполните новый массив (result) числами из старого (arr). 
// Количество элементов в массиве можно получить как arr.length, 
// а к элементам обращаемся все так же: arr[0], arr[1] и тд.
// Должен получиться точно такой же массив
  
// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];

// for (let i = 0; i < arr.length; i++) {
//    result[i] = arr[i];
// }

// console.log(result);

// Измените данный массив так, чтобы все числа были увеличены в 2 раза, 
// а если попадается строка строка - то к ней было добавлено " - done".
// Для определения типа данных используйте typeof();
// Должно получиться: [ 10, 20, 'Shopping - done', 40, 'Homework - done' ]

// const data = [5, 10, 'Shopping', 20, 'Homework'];

// for (let i = 0; i < data.length; i++) {
//    if (typeof(data[i]) === 'number') {
//       data[i] = data[i] * 2;
//    } else if (typeof(data[i]) === 'string') {
//       data[i] = `${data[i]} - done`;
//    }
// }
// console.log(data);


// Разверните массив data наоборот при помощи цикла и запишите данные 
// в массив result.
// Должно получиться: [ 'Homework', 20, 'Shopping', 10, 5 ]

// const data = [5, 10, 'Shopping', 20, 'Homework'];
// const result = [];

// for (let i = 1; i <= data.length; i++) {
//    result[i - 1] = data[data.length - i];
// }

// console.log(result);

// Необходимо написать код, который при помощи звездочек (*) в консоли 
// нарисует вот такую фигуру:

//      *
//     ***
//    *****
//   *******
//  *********
// ***********

const lines = 5;
let result = '';

for (let i = 0; i <= lines; i++) {
    for (let j = 0; j < lines - i; j++) {
       result += ' ';
    }
    for (let j = 0; j < 2 * i + 1; j++) {
      result += '*';
   }

    result += '\n'; 
 }

 console.log(result);

