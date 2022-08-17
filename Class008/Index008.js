// Homework ////////создать класс todolist
class TodoList {
  constructor() {
    this.todo = [];
  }

  addToList(text, id) {
    const newId = () => +String(performance.now()).replace('.', '') + Date.now();
    const object = {
      text: text,
      date: new Date().toString(),
      id: id,
    };
    this.todo.push(object);
  }

  removeFromList(id) {
    const index = this.todo.findIndex((n) => n.id === id);
    if (index !== -1) {
      this.todo.splice(index, 1);
    }
  }

  sort() {
    this.todo.sort((a, b) => {
      return a.date - b.date;
    });
  }

  clear() {
    this.todo.length = 0;
  }
}
const todo = new TodoList();

todo.addToList("text", 1);
todo.addToList("text", 2);
todo.addToList("text", 3);
todo.addToList("text", 4);
todo.addToList("text", 5);
todo.addToList("text", 6);
todo.removeFromList(5);
todo.removeFromList(2);
todo.sort();
todo.clear(); // delete all todo
console.log(todo);




// class Todolist {
//     constructor(){
//         this.todo = [];
//     }

// };

// todo.addTolist({task: 'Do the job', date: Date.now()}); /*4ре метода */

// todo.RemoveFromList({id:1});//удаляет  /*как генерировать id посмотреть в интерненте, главное чтобы не было повторяшек */
// todo.sort(); // от большего к меньшему
// todo.clear(); // очистить все todo

// function Animal(type, word) {
//     this.type = type;
//     this.sayWord = function(word) {
//         console.log(`${word}`);
//     }

// }
// const cow = new Animal('cow');
// cow.sayWord('Moo')

///калькулятор
// function Calculator() {
//   this.read = function () {
//     this.one = Number(prompt("Введите первое число"));
//     this.two = Number(prompt("Введите второе число"));
//   };
//   this.sum = function () {
//     return this.one + this.two;
//   };
//   this.mul = function () {
//     return this.one * this.two;
//   };
// }
// let calculator = new Calculator();
// calculator.read();

// alert(calculator.sum());
// alert(calculator.mul());

// классы
// class User {     /**/
//   constructor(name) {
//     this.name = name;
//   }
//   sayHi() {
//     console.log(this.name);
//   }
// }
// const user = new User ('Ivan');
// user.sayHi()

//калькулятор через class

// class Calculator {
//   constructor() {}
//   read() {
//     this.a = Number(prompt("ff"));
//     this.b = Number(prompt("ll"));
//   }
//   sum() {
//     return this.a + this.b;
//   }
//   mul() {
//     return this.a * this.b;
//   }
// }

// let calculator = new Calculator();
// calculator.read();
// log надо ввести calculator.sum();
// calculator.mul();
