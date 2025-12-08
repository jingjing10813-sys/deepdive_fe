const sentence = 'Good morning, Hello Ghost'
const hasGhost = sentence.includes("ghost");
console.log(hasGhost);

console.log(sentence.toUpperCase());
console.log(sentence.toLowerCase());

const str = 3;

//003으로 출력하기 -> padstart()
console.log(String(str).padStart(3, '0'));

console.log(sentence.repeat(3));