// show whichever number is the greater (higher) number.
// it works (e.g. "The greater number of 5 and 10 is 10.").
// task1;
// const num1 = 20;
// const num2 = 10;

// if (num1 > num2) {
//   console.log(`the greater number of ${num1} and ${num2} is ${num1}`);
// } else {
//   console.log(`the greater number of ${num1} and ${num2} is ${num2}`);
// }

// -------------------------------------------------------------------------------

// takes 1 variable, a language code (e.g. "es", "de", "en")
// show in log "Hello, World" for the given language, for at least 3 languages. It should default to show English.
// Please use if else,else if
// task2
// let lang = "en";

// if (lang == "en") {
//   console.log("Hello world!");
// } else if (lang == "ru") {
//   console.log("Привет, мир");
// } else if (lang == "aze") {
//   console.log("salam dunya");
// }

// takes 1 variable, a number score.
// show a grade for the score, either "A", "B", "C", "D", or "F"
// Please use if else else if for the score.
// task3

// let score = 29;

// if (score >= 91) {
//   console.log("Your score is A");
// } else if (score >= 80 && score <= 90) {
//   console.log("Your score is B");
// } else if (score >= 60 && score <= 70) {
//   console.log("Your score is C");
// } else if (score >= 40 && score <= 60) {
//   console.log("Your score is D");
// } else {
//   console.log("Your score is F((");
// }

// -------------------------------------------------------------------------------

// takes 2 variables, a "noun" and a "number".
// show the number and pluralized form, like "5 cats" or "1 dog".

// task4

// let noun = "cat";
// const num = 15;

// if (num == 1) {
//   console.log(`${noun}, ${num}`);
// } else {
//   console.log(`${noun}s, ${num} `);
// }

// -------------------------------------------------------------------------------

// task5
// let result = prompt("who are you??");

// if (result == "admin") {
//   let password = prompt("please enter your password");
//   if (password == 202020) {
//     console.log("welcome our site");
//   } else {
//     console.log("You are liar, get out now!!!");
//   }
// } else {
//   alert("get out!!!");
// }

// -------------------------------------------------------------------------------

// task6

let operator = prompt("enter your operator (+, -, *, /)");
let num1 = +prompt("enter num1:");
let num2 = +prompt("enter num2:");
let result;

switch (operator) {
  case "+":
    result = num1 + num2;
    console.lo(`${num1} + ${num2} = ${result}`);

    break;

  case "-":
    result = num1 - num2;
    console.log(`${num1} - ${num2} = ${result}`);

    break;

  case "*":
    result = num1 * num2;
    console.log(`${num1} * ${num2} = ${result}`);

    break;

  case "/":
    result = num1 / num2;
    console.log(`${num1} / ${num2} = ${result}`);

    break;

  default:
    console.log("wrong operator!");
    break;
}

console.log(`${result}`);
