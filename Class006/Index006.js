//////Homework/////

// const Array = [   //массив
//   5, 2, 1, -10, 8
// ];
// Array.sort((a,b) => b - a);  //сортировка стрелочной ф-цией 
// alert(Array);

//////or/////
// const DownArr = [
//   5, 2, 1, -10, 8
// ]

// DownArr.sort(function(a,b)
// {
//   return b - a;
// });

// console.log(DownArr);




//Lesson 006


// метод array.forEach(element => {

// });

// const sentence = ['My', 'name', 'is', 'Alex'];

// sentence.forEach((item, index, array)=>{

// console.log(item);
// })  ;

// item - значения
// index - индекс
// array - массив

// const sentence = ['Everybody', 'likes', 'lol', 'with', 'friends', 123];

// console.log(sentence.includes('with'));

// //поиск значения в массиве, если оно есть = true , если нет = false;

// const array = [
//     {id: 1, name: 'Вася'},
//     {id: 2, name: 'Петя'},
//     {id: 3, name: 'Ваня'},
// ];

// const answer;

//  array.forEach((item) =>{
//     if (item.id === 2) {
//         answer = item
//     }
//  });
// метод .find
// const answer = array.find((item) => {
// if(item.id === 2){
//     return true
// }
// });

// const table = [
//   { id: 1, name: "apple" },
//   { id: 2, name: "strabbery" },
//   { id: 3, name: "tommato" },
// ];

// const answer = table.find((item) => {
//   if (item.id === 1) {
//     return true;
//   }
// });

// const table = [
//     { id: 1, name: "apple" },
//     { id: 2, name: "strabbery" },
//     { id: 3, name: "tommato" },
//   ];
//   const Newanswer = (argumentId) => {
//     const answer = table.find((item) => {
//         if (item.id === argumentId) {
//           return true;
//         }
//       });
//       return answer

//   }
//   console.log(Newanswer(1));

// метод .filter
// const table = [
//     { id: 1, name: "apple" },
//     { id: 2, name: "strabbery" },
//     { id: 3, name: "tommato" },
//     { id: 3, name: "sdfsdf" },
//   ];
//   const Newanswer = (argumentId) => {
//     const answer = table.filter((item) => {
//         if (item.id === argumentId) {
//           return true;
//         }
//       });
//       return answer

//   }
//   console.log(Newanswer(3));

// const game = [
//   // создаю массив 'game', где name = ключ, score = ключ
//   { name: "John", score: 10 },
//   { name: "Pete", score: 5 },
//   { name: "Mary", score: 12 },
//   { name: "Konstantin", score: 4 },
//   { name: "Ivan", score: 22 },
// ];

// const score = (playerId) => {
//   //ф-ция 'score'
//   const player = game.filter((item) => {
//     //
//     if (item.score >= 10) {
//       return true;
//     }
//   });
//   return player;
// };
// console.log(score());

// const game = [
//   {name : 'John', score: 10},
//   {name : 'Pete', score: 5},
//   {name : 'Mary', score: 12},
//   {name : 'Konstantin', score: 4},
//   {name : 'Ivan', score: 22},
// ];

// const score = (playerId) =>{
// const player = game.filter((item) => {
//   if (item.score >= 4 && item.score <= 12) {
//     return true
//   }
// });
// return player
// }
// console.log(score());

/// метод .map
// const game = [
//   { name: "John", score: 10 },
//   { name: "Pete", score: 5 },
//   { name: "Mary", score: 12 },
//   { name: "Konstantin", score: 4 },
//   { name: "Ivan", score: 22 },
// ];

// // const answer = game.map((item) => {
// //   return {
// //  name:item.name,
// // score: item.score +10
// }
// // })
// // console.log(answer);

// // можно так :

// const answer = game.map((item) => {
//   const newAnswer = {
//     name: item.name,
//     score: item.score + 10,
//   };
//   return newAnswer;
// });
// console.log(newAnswer);

// const newArray = [
//   { name: "John", surname: "Пупкин", id: 1 },
//   { name: "Pete", surname: "Ivanov", id: 2 },
//   { name: "Mary", surname: "Petrova", id: 3 },
//   { name: "Konstantin", surname: "Vasechkina", id: 4 },
//   { name: "Ivan", surname: "Ovechkin", id: 5 },
// ];
// const answer = newArray.map((item) => {
//   return { fullName: item.name + " " + item.surname, id: item.id };
// });
// console.log(answer);

//метод сортировка .sort
// const sortArray = [
// 12, 4 , 6 , 22, 102, 3
// ]
// console.log(sortArray.sort((a, b) => {
//  if (a < b) {
//   return -1
//  }
//  if (a > b) {
//   return 1
//  }
//  return 0
// }));

// const sortArray = [
//   // массив объектов
//   { score: 22 },
//   { score: 12 },
//   { score: 30 },
//   { score: 5 }, // {score:5} - объект, score = ключ, 5 = значение
// ];
// console.log(
//   sortArray.sort((item, item2) => {
//     // сортировка item = a, item2 = b
//     if (item.score < item2.score) {
//       //обращаюсь к через item к значению score и сравниваю его с обращением через item2 к score item2
//       return -1;
//     }
//     if (item.score > item2.score) {
//       return 1;
//     }
//     return 0;
//   })
// );

  





