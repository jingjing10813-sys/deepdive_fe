const phoneNumber = "01012345678";

// 01. 마지막 4자리를 뺀 나머지는 모두 '' 처리
// 최종적으로는 **5678 출력되도록
// repeat, slice 사용
//console.log("*".repeat(5));

const star = "*".repeat(phoneNumber.length-4) + phoneNumber.slice(-4);
console.log(star);


const scores = [25, 32, 40, 15];
// 02. scores의 평균값을 구하시오.
// reduce, length 사용
const average = scores.reduce((a,c) => a+c,0)/scores.length;
console.log("average :", average);

const myScores = {
  math: 90,
  english: 80,
  science: 70,
};

// 03. 내 점수의 합계를 구하시오.
// Object.values, reduce 사용
const total = Object.values(myScores).reduce((a,c) => a+c,0);
console.log(total);