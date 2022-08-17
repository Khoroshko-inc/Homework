///Homeworke/
const array = [1, 2, [2, [2], 2], 5, [1], 3]; // массив с массивами
const newArr = array.flat(Infinity); //сведение вложенных массивов в один массив

// .flat() - 1 уровень, (2) - второй.. и так далее, если неизвестна глубина ставим Infinity;

//использую метод .reduce чтобы обратиться к каждому элементу массива, и сложит все числа слева направо
const sumArray = newArr.reduce((a, b) => a + b, 0);
console.log(sumArray);


//метод рекурсии
// const array = [1, 2,[2, 2], 5, [1,2], 3]; // массив с массивами
// const sumArr = array => array.reduce((a, b) => a + (array(a) ? sumArr(b) : b), 0);
// console.log(sumArr(array));

///Class 007//
// const array = [
//   ["a", 2] /*массив с массивами*/,
//   ["b", 2],
//   ["c", 3],
// ];

// const newArr = array.map((item) => {
//   return {
//     [item[0]]: item[1], // обязательно в квадратных скобках
//   };
// });

// console.log(newArr);

/////метод .reduce//
// array = [1, 2, 3];
// array.reduce((acc, item) => {         /*acc - аккумулятор, по сути вншняя переменная*/
// return acc + item
// }, 0);

// const array = [{a:1},{a:2},{a:3}];
// const result = array.reduce((acc,item) => {
//     return acc + item.a

// },0)

// console.log(result);

///методы объектов....//

// let user = {
//     name : "john",
//     age : 30,
// }

// //вызов на массиве array.filter

// user.sayHi = function(){
//     console.log("hi");
// }

// user.sayHi()
//либо

// let user = {
//     name : "john",
//     age : 30,
//     sayHi: function() {
//         console.log('hi');
//     }
// }

// function sayHi() {
//     console.log("hi");
// }

// user.sayHi()

// let user = {
//   name: "john",
//   age: 30,
//   sayHi: function () {
//     console.log(this.age);
//   }
// };
////////////////////уточнить // разобрался
// let user = {
//   name: "john",
//   age: 30,
//   sayHi: function () {
//     console.log(this.name);
//     console.log(user.age);
//   },
// };
// user.sayHi ()

// const admin = user;
// user = null;
// admin.sayHi();

// console.log(user.sayHi());

// let user = { name: "John" };
// let admin = { name: "Admin" };

// function sayHi() {
//   console.log(this.name);  // this приязан к объекту
// }
// console.log(sayHi());
// user.f = sayHi;   //записали в объект user
// admin.f = sayHi;
// user.f();
// admin.f();

// let obj = { name: "Alex" };
// let obj1 = { age: 24, name: 'Bob' };

// function sayHi() {
//   console.log(`hello, ${this.name}`);
// }
// console.log(sayHi());
// obj.f = sayHi;
// obj1.f = sayHi;
// obj.f();
// obj1.f();

///ф-ции конструкторы /////////////
// function User(name, lasafah) {
//   // this = {} (пустой объект)
//   // ф-ции конструкторы пишутся с большой буквы
//   this.name = name;
//   this.isAdmin = false;
// }

// let user = new User("Bob", 123);

// console.log(user.name);

// function say(name) {
//     return name
// }

// say('Ivan')

////разобратся//
// const arr = ["Anton", "Vova", "Lili", "Mary", "John"];

// function User(name) {
//   this.name = name;
//   this.isAdmin = false;
// }

// arr.map((item) => {
//   return new User(item);
// });

// console.log();

// const arr = ["Anton", "Vova", "Lili", "Mary", "John"];

// function User(name) {
//   this.name = name;
//   this.isAdmin = false;
// }

// arr.map((item) => {
//   return new User(item);
// });

// console.log();
