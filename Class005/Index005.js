////////Homework////

const arr = ["hello", "i", "am", "null"];
const newArr = arr.splice(0, 3); //вызов метода на массиве
newArr.splice(3, 0, "Alex"); //вызов метода на новом массиве
let string = ""; //пустая строка

for (let i = 0; i < newArr.length; i++) {
  string = string + " " + newArr[i];
}

console.log(newArr.join(" "));



//class005///

// хэш = объект

// посчитать сумму значений в массиве
// // array = массив;
// const array = [
//     {fruits: 5},
//     {fruits: 15},
//     {fruits:4},
//     {fruits: 23},
//     {fruits: 65},                // [{}]- объект, fruits = ключ; "5" = значение
//     {fruits: 0},
//     {fruits: 32},
//     {fruits: 12},
//     {fruits: 15},
//     {fruits: 65},
//     {fruits: 7},
//     {fruits: 5},
// ]
// //

// let sum = 0;

// for( let i = 0; i <array.length; i++) {
//    в переменную i складываю объект [{}] //let object(переменная) = array[i]
// получаем объект  или так  array[i]
// // let value = object.fruits; // получаем значение

// получаю значение ключа и записываю его в переменную: let value(новая переменная) = object.fruits
// sum += array[i].fruits;  // записываю и суммирую значения объектов
// }

// console.log(sum); //вывожу консоль переменную sum

// const newArray = ['Hello', 'My', 'Dear','Friend'];

// let string = "";

// for (let i = 0; i < newArray.length; i++) {
//     string = string +" "+ newArray[i]

// }
// console.log(string);

// console.log(newArray.join(" "));

// newArray.join(" ")   // сливает в одну строчку строки из массива newArray

//    Методы spliсe() и slice()
// возвращает массив

// const array = ["I", "go", "home"];

// const newArray = array.splice(1, 2); //вызов метода на массиве
// console.log(array);

// const array = ["I", "go", "home"];

// const newArray = array.splice(1, 2, "home", "Wowrlds", "banana");   //удалили и вставили новые позиции
// console.log(array);

// const array = ["я", "изучаю", "javascript"];

// array.splice(2, 0, 'сложный', "язык");   //вставили новые позиции с позиции 2
// console.log(array);

// const array = ["t", "e", "s", "t"];

// const newArray = array.slice();  // копирует массив и он не вносит изменения в старый массив

// newArray.push("s");
// console.log(newArray);

// const array = ["t", "e", "s", "t"];

// const newArray = array.slice(1,3);  // берет на 1 меньше

// console.log(newArray);

// метод concat()  // соединяет два массива в один concatArray

// const array = [1, 2];
// const newArray = [3, 4];

// const concatArray = array.concat(newArray);
// console.log(concatArray);

//поиск индекса в массиве

// const array = [1, 0, false];
// console.log(array.indexOf(false));

// спросить про !== -1 //////////////////////////////////////////////////////////////////////////////

// const array = [null, undefined, "Tolya", 123];

// const deleteFromArray = (array) => {         //переменная deleteFromArray присвоили значение массива "array"
//   let index = array.indexOf("Tolya");        // в стрелочной ф-ции создаю новую переменную "index" т.к. не знаю номера позиции 'Tolya'
//   array.splice(index, 1);                    //подставляю значение "index" в метод .splic, чтобы его удалить.
//   return array; // проделав все операции функции с массивом возвращаю массив
// }

// console.log(deleteFromArray(array)); // вывод массив в консоль

// можно добавить проверку :
// if (index !== -1) {
//     array.splice(index, 1);
//     return array
// } else {
//     return 'Error'
// }

// const concatArrays = (array1, array2) =>{

//     let NewconcatArrays = array1.concat(array2);
//     return NewconcatArrays
// }

// console.log(concatArrays([1,2,3],[4,5,6]));
