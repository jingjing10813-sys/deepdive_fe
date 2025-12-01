const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers);

const doubleNumbers = evenNumbers.map((num) => num ** 2);
console.log(doubleNumbers);

const arr = [13, 5, 22, 10, 5, 15, 82];
const result = arr.slice(3, 5);
console.log(result);
const evenNumbers1= arr.filter((num) => num % 2 === 0);
console.log(evenNumbers1.length);
const multiplesOfFive = arr.filter((num) => num % 5 === 0);
console.log(multiplesOfFive.length);
