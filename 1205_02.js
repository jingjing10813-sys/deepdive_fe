const a = 5;
const b = 12;
const c = 20;

//a,b 두수의 차이를 구하시오 함수로 구하시오 Math.abs()
console.log(Math.abs(a - b));

//abc중 가장 큰 수를 구하시오
console.log(Math.max(a,b,c));

const price = 1230;
//price의 가격을 100원단위로 올림하시오 1233 -> 1300원
console.log(Math.cell(price/100)*100);

const random = Math.floor(Math.random() * 15) + 1;
console.log(random);