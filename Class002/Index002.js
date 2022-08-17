//ДЗ.........../////////////

const request = confirm("Вам есть 18?");

const AnsRequest = (request) =>
  request ? true : confirm("А родители разрешили?");

AnsRequest();

// function sum() {
//     return 1;
// }

// sum()

// const answer = sum()

// function helloName(name) {
//     // alert("Hello, " + name);
//     console.log (`Hello, $(name)`)

//   }

//   helloName("Alex");

// function helloName(name = 'Ivan') {

//     // alert (arguments)
//     return `Hello, ${name}`;

//   }

//   helloName('Vova', 'Ivan', 'Anton');

//   // новый стандарт

//   const helloName2 = () => {
//       return `Hello, ${name}`;
//   }

// переводит часы в минуты :
// const getMinuts = (hour) => {
//     return (hour * 60);

// }
// console.log (getMinuts(2));

// const getMinuts = (hour) => hour * 60; // тоже что и выше только слово 'return'
//                                     // и скобки убраны, но выполняются по факту (однострочная фунция)
// console.log (getMinuts(10));

// const getMinuts = (hour) => {
//     // 'Введите'.toLocaleLowerCase()
//     if (typeof hour === 'number') {
//         return (hour * 60);

//     } else {
//         return 'Введите число'
//     }
// };

// console.log (12);

// const getType = (value) => typeof value ;

// getType('');

// const lowNumber = (a , b) => {
//     if ( a < b ) {
//         return a;
//     } else if (a > b) {
//         return b;
//     } else {
//         return `$(a) равно $(b)`;
//     }
// }

// console.log(lowNumber(2,5));
