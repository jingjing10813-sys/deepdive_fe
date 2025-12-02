//01. filter를 사용하여 짝수만 골라 evenNumbers 변수에 담아 출력
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers);

//02. evenNumbers의 숫자들을 모두 2제곱수로 만들어 doubleNumbers 변수에 담아 출력
const doubleNumbers = evenNumbers.map((num) => num ** 2);
console.log(doubleNumbers);

//03. arr인덱스 3번째부터 4번째까지만 추출하기 ->10,5
const arr = [13, 5, 22, 10, 5, 15, 82];
const result = arr.slice(3, 5);
console.log(result);

//04. arr에서 짝수의 개수를 구하시오 length, filter사용 -> 3
const evenNumbers1= arr.filter((num) => num % 2 === 0);
console.log(evenNumbers1.length);

//05. arr에서 5의 배수의 개수를 구하시오 -> 5
const multiplesOfFive = arr.filter((num) => num % 5 === 0);
console.log(multiplesOfFive.length);
