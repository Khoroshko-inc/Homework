////Homework///////
const obj = {
  age: 24,
  name: "Alex",
  fruit: "apple",
};

const keys = Object.keys(obj);

const without = (obj, keys) => {
  let newObj = {};

  for (key in obj) {
    if (keys.includes(key)) {
      newObj[key] !== obj[key];
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
};

console.log(without(obj, "fruit"));





///Class004///

// Объекты
// const object = {name : "Ivan"};

// //получить объект
// //object['name']  // для строк (нескольких слов через пробел)

// object.name

// object.surname = '' // создаем новый ключ, для того чтоы добавить новый объект

// const object = { name: "Alex", age: "24" };

// console.log(object.name);

// const createPerson = (name, age) => {
//   return {
//     name: name,
//     age: age,
//   };
// };

// const object = createPerson("Vova", 40);
// const string = `${object.name} ${object.age}`;
// console.log(string);

// const obj = { fruit: "Banana", name: undefined };
// console.log(obj.name);
// // чтобы проверить существование ключа в объекте ( важно писать строчкой)
// console.log("name" in obj);

// for (key in obj) {
//     console.log(key); //ключи строчками
//   console.log(obj[key]); // данная конструкция перебирает все ключи // значение ключей
// }

// const salaries = { Ann: 500, Anton: 1400, Tatyana: 700 };

// let sum = 0;
// for (key in salaries) {
//   sum += salaries[key];   // или так
// sum = sum + salaries[key]

// }
// console.log(sum);

// const salaries = { Ann: 500, Anton: 1400, Tatyana: 700 };

// const keys = Object.keys(salaries)

// //другой метод
// const value = Object.values(salaries)

// for( let i = 0, i < keys.length, i++) {   // массив всех ключей
//     salaries[keys[i]]
// }

// посчитат сумму через values

// const salaries = { Ann: 500, Anton: 1400, Tatyana: 700 };

// const value = Object.values(salaries);

// let sum = 0;

// for (key in salaries) {}

// const salaries = { Ann: 500, Anton: 1400, Tatyana: 700 };

// const value = Object.values(salaries);

// const func = (object)=>{
//     let max = 0;

//     const values = Object.values(salaries);  // возвращает массив значений

//     for (let i = o, i < values.length, i++){
//         if (max < values[i]){
//             max = values[i]
//         }
//     }
//     for (let i = 0, i < MediaKeySession.length, i++){}
// }
