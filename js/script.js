"use strict";

let numberOfFilms;

function start() {
  numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
  }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const a = prompt("Один из последних просмотренных фильмов?", ""),
      b = prompt("На сколько оцените его?", "");

    if (a != null && b != null && a != "" && b != "" && a.length < 50) {
      personalMovieDB.movies[a] = b;
      console.log("done");
    } else {
      console.log("error");
      i--;
    }
  }
}

rememberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
  } else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
  } else {
    console.log("Произошла ошибка");
  }
}

detectPersonalLevel();

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
  }
}

writeYourGenres();

// // let num = 50;
// // while (num < 55) {
// //   console.log(num);
// //   num++;
// // // }

// // do {
// //   console.log(num);
// //   num++;
// // } while (num < 55);

// for (let i = 1; i < 10; i++) {
//   if (i === 6) {
//     // break;
//     continue;
//   }
//   console.log(i);
//   // num++;
// }

// for (let i = 0; i < 3; i++) {
//   console.log(i);
//   for (let j = 0; j < 3; j++) {
//     console.log(j);
//   }
// }

// let result = "";
// const length = 7;

// for (let i = 1; i < length; i++) {
//   for (let j = 0; j < i; j++) {
//     result += "*";
//   }
//   result += "\n";
// }
// console.log(result);

// first: for (let i = 0; i < 3; i++) {
//   console.log(`First level:${i}`);
//   for (let j = 0; j < 3; j++) {
//     console.log(`Second level: ${j}`);
//     for (let k = 0; k < 3; k++) {
//       if (k === 2) continue first;
//       console.log(`Third level:${k}`);
//     }
//   }
// }

// const numberOfFilms = +prompt("How many films you watched?,''");
// for (let i = 1; i < 50; i++){
//   console.log(numberOfFilms)
// }
// let num = 20;
// function showFirstMassage(text) {
//   console.log(text);
//   let num = 10;
//   console.log(num);
// }

// showFirstMassage("Hello world!");
// console.log(num);

// function calc(a, b) {
//   return a + b;
// }

// console.log(calc(4, 3));
// console.log(calc(4, 6));

// function ret() {
//   let num = 50;
//   return num;
// }
// const anotherNum = ret();
// console.log(anotherNum);

// function sayHello(name) {
//   return `hello,${name}!`
// }

// function returnNeighboringNumbers(number) {
//   return [number-1, number, number+1]
// }

// function getMathResult(baseNumber, progressNumber) {
//   if (typeof (progressNumber) !== "number" || progressNumber === 0 || progressNumber < 0) {
//     return baseNumber
//   } else {
//     for (let i = baseNumber; i < progressNumber; i++){
//   return`baseNumber*i ---`
//     }
// }
// }
