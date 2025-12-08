//2초마다 반복실행
//setInterval( () => {
//    console.log()
//}, 2000, 'Tick Tock'
//)

//setInterval( () => { 
//    const now = new Date();
//    console.log(now.toLocaleTimeString());
//}, 1000);

//const timerId = setInterval( () => console.log("Tick"), 1000);
//setTimeout(() => clearInterval(timerId),5000);


let seconds = 0;
setInterval( () => {
    seconds++;
    console.log(`${seconds}초 경과`)
}, 1000)