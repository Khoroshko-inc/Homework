//************ДЗ 1. нужно спросить у пользователя год. вернуть ему количество дней в этом году ************//



//дз 


let num = prompt('Введите год'); 
if (num % 4 == 0) {
    alert ('366 дней');
} else {
    alert ('365 дней');
}



//1 Задание 
// const answer = prompt ('Ваше имя');
// alert(`привет ${answer}`); 
// обратные кавычки чтобы сработало с $



//
//const answer = prompt ('Ваше имя');

//if (answer) {
//    alert(`привет ${answer}`)
//} else {
//    alert('Ваше имя')
//}



//2 Задание

// const answer18= confirm("Есть ли вам 18 лет?");
// if (answer18){
//    alert('Yes')
// } else{
//    alert("No")
// }


//3 Задание 

// const firstNumber = prompt("Введите первое число");
// const secondNumber = prompt("Введите второе число");
// // alert(Number(firstNumber) + Number(secondNumber))

//4 Задание

// const firstNumber =Number(prompt("Введите первое число")) ;
// const secondNumber = Number(prompt("Введите второе число"));
// const operation = prompt("Введите арифметичесакое действие")

// switch (operation) {
//     case "+":
//         alert(firstNumber + secondNumber)
//         break;
        
// case "-":
//         alert(firstNumber - secondNumber)
//         break;

// case "*":
//         alert(firstNumber * secondNumber)
//         break;
// case "/":
//             alert(firstNumber / secondNumber)
//             break;

//     default:
//         alert("not found")
//         break;
// }


// let Value = null;


// let answer = Value? true : false;

// то что написано выше :
// if (trueValue) {
//     return true
// } else {
//     return false
// }


// console.log(a++);   // age++ - постинкримент  age-- - декримент
//                     //++age - прединкримент   --age - предкримент
// console.log(a)


// let age = 1; 
//   // цикл добавляет +1 каждый раз до достижения 30
// while (age < 30) {
//   alert (age);  
//   age = age + 1;
// }



// do {
    
// } while (condition);   // выполниться хоть один раз 


// for ( let i = 0;  i <= 100; i++){   // выводит в консоль все положительные числа до 100
//     if ( i % 2 === 0 ){
//         alert (i);
//     }
//     break;
// }

// let sum = 0
// for (let i = 0; i <= 100; i++){     // складывает все числа по порядку до 100 
//     sum = sum + i;
//     alert (sum)
// }

// let num;

// do {
//   num = prompt("Введите число больше 100?", 0);
// } while ( num <= 100 &&num);


// let num                                                 

// do {
//     num = prompt("Введите число больше 100", 0)    // ,0 - дефолтное значение 0
// } while (num <=100 && num);   // && - проверка на нуль 

//const  a = true ? 'a' : 'b' //тернарный оператор 

