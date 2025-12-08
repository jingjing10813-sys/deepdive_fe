console.log(1);
setTimeout( () => {
    console.log(2)
}, 3000)

console.log(3);

//2초뒤에 이름짓기
setTimeout( (name) => {
    console.log(`hello, ${name}`);

}, 2000, "GHOST")

//타이머 취소
const timerId = setTimeout( () => {
    console.log(`실행되지않음`)
}, 5000 );
clearTimeout(timerId);

// setTimeout으로 2초후에, {~님}{~초}후에 인사드립니다.
//이름 , 시간 입력받기
function greeting(name, seconds) {
  console.log(`${name}님 ${seconds}초 후에 인사드립니다`);  
}
setTimeout(greeting, 2000, "지윤", 3);



setTimeout( (name, time) => {
    console.log(`${name}님 ${time}초 후에 인사드립니다`);
}, 2000, "지윤", 3)