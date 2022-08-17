/////Homework/////
const form = document.getElementById('form')
const button = document.getElementById('submit');


class Review {
    constructor() {
        this.reviewList = [];
    }
    static validateReview(data) {
        return (data.from && data.text && data.review !== "" && data.review >= 1 && data.review <= 5 ? true : false)
    }

    addTolist(data) {
        this.reviewList.push(data);
    }

    render(data) {
        const list = document.getElementById('list');

        const textP = document.createElement('p');
        const fromP = document.createElement('p')
        const reviewP = document.createElement('p')
        let listItem = document.createElement('li');

        textP.innerText = data.from;
        fromP.innerText = data.text;
        reviewP.innerText = data.review;

        listItem.appendChild(fromP);
        listItem.appendChild(textP);
        listItem.appendChild(reviewP);
        list.appendChild(listItem);
    }
}

const review = new Review();

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const formDataEntries = formData.entries();

    const data = Object.fromEntries(formDataEntries);

    const validate = Review.validateReview(data);
    console.log(validate);
    if (validate) {
        review.addTolist(data);
        review.render(data);
    } else(
        alert('Fill in the form fields!')
    )
})

console.log(review);





//инкапсуляция - пользователь не должен знать как реализован код
//наследование - один класс может наследовать методы и св-ва другого класса
//полиморфизм - метод один тот же, но при других данных будет дейстовать по другому (зависит от входящих параметров или данных)

// статические свойства, методы и классы

// Math.random() //- вызов статического метода

// const person = new Person();

// class Review {
//   constructor(title, date) {
//     this.date = date;
//     this.title = title;
//   }
//   static createReview(title) {
//    return new this(title, new Date())
//    //= new Review(title, new Date())
//   }
// }
// const review = Review.createReview('New Review');

// статические св-ва

// class Review {
//     constructor(title, date) {
//       this.date = date;
//       this.title = title;
//     }
//     static createReview(title) {
//      return new this(title, new Date())
//      //= new Review(title, new Date())
//     }
//     changeDate(){

//     }
//   }

//   const date = Review.date;
//   const review = Review.createReview('New Review');
///////////////////////
// class Article {
//   static date = new Date().toString();

//   static compare(date1, date2) {
//     return date1 > date2;
//   }
// }
// const date = Article.data;
// const article = Article.compare(1,2);
// console.log(date);
// console.log(article);
////////////////

// const form = document.getElementById("form");

// class Review {
//   constructor() {
//     this.reviewList = [];
//   }

//   static validate(data) {
//     let isNotValidated = true;
//     if (data.text && data.form && data.review >= 1 && data.review <= 5) {
//       return true;
//     }
//     return false;
//   }

//   addTOList(data) {
//     this.reviewList.push(data);
//     this.render();
//   }
//   render() {
//     const ul = document.getElementById("ul");

//     const textP = document.createElement("p");
//     const fromP = document.createElement("p");
//     const reviewP = document.createElement("p");
//     const li = document.createElement("p");

//     li.append(textP);
//     li.append(fromP);
//     li.append(reviewP);
//   }
// }

// const reviews = new Review();

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const formData = new FormData(event.target);
//   const formDataEntries = formData.entries();
//   const data = Object.fromEntries(formDataEntries);
//   const validated = Review.validate(data);
//   if (validated) {
//     reviews.addTOList(data);
//   } else {
//     alert("Вы ввели неправильные данные");
//   }
// });
