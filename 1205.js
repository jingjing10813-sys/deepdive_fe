//날짜 객체

const now = new Date();
console.log(now);


const year = now.getFullYear();
const month = now.getMonth() + 1; // 0~11 → 1~12로 보정
const date = String(now.getDate()).padStart(2,"0"); //3:15:3 -> 03: 15: 03
const day = now.getDay(); // 요일=0~6 /  일=0, 월=1, 화=2, 수=3, 목=4, 금=5, 토=6
const hours = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();

console.log(year, month, date, day);
console.log(`${hours} : ${minutes} : ${seconds}`);
console.log(Date.now());

console.log(now.toLocaleTimeString());
console.log(now.toLocaleDateString());

console.log(Date.now());

