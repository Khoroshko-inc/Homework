//////Homework_003////
const array = [1, 2, null, false, NaN, 4, undefined, "",5];

const sortArray = (array) => {
  let newArray = [];
  for (i = 0; i < array.length; i++) {
    if (Boolean(array[i]) === true) {
      newArray.push(array[i]);
    }
  }
  return console.log(newArray);
};

sortArray(array);





// console.log (b)
// console.log (c)

// var b = 1;
// var c = 2;

// function sum () {
    
// }


// function sum(number) {
//     let o ;
//     for (let i = 0; i <= number; i++){
//         o = i + o;
//     }
//     return o;
// }




// const array = [];
// const array1 = [1];

// console.log(array1.length);


// for(let i = 0; i < array1.length; i++){
//  console.log(array1[i]);
// }

// выводит все индексы из массива 
// const array = [Number, String, Boolean, null,undefined];
// for (i = 0; i < array.length; i++){
// console.log(array[i]);
// }

// методы массивов

// const array1 = ['hello', true];
// array1[array1.length] = 'Ivan';

// array1.push (1);  // добавляет (то что в скобках) в конец массива. (Длина массиа увеличиваетя на 1 индекс).

// array1.pop(); // удаляет последний элемнт массива



// const array = [];
// for (let i = 0; i < 100; i++) {
//     array.push(i);
// }
// //  console.log(array);

// const getArray = (array) => {
//     let resultArray = []; // новый пустой массив 
//     for (let i = 0; i < array.length; i++)
//     {
//         if (array[i] % 2 === 0) {
// resultArray.push(array[i])
//         }
//     } 
//     return resultArray; 
// }

// console.log(getArray(array)); 



// сравнение массивов 
// const a = [];
// const b = [];

// console.log(a === b); 
// такое сравнение массивов выдаст false 

// const fruits = ['яблоко', 'Груша','Апельсин'];

// let shoppingCart = fruits;

// shoppingCart.push('Банан')

// console.log(fruits);


// const num = ['один', 'два','три'];

// let table = num;  // присвоение переменной "table" ссылки на массив "num"

// table.push('десять')  // записываю в конец массива значение в скобках 

// console.log(num); // 


// const array = [4, 3, 2 ];

// const reversArray = (array) => {
//     let array1 = [];
//     for (let i = array.length - 1; i >= 0; i--){
//         array1.push(array[i]);
//     }
//     return(array1);
// }
// console.log(reversArray(array)); 

//array.shift () 
//array1.unshift(123123)


