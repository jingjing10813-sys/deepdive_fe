const animals = ["dog", "cat", "tiger", "elephant", "rabbit"];

animals.pop(); //맨뒤 원소하나 삭제
console.log(animals);
animals.pop();
console.log(animals);
animals.push("rabbit");//맨 뒤 원소하나 추가
console.log(animals);
animals.unshift("tiger"); //맨 앞 원소 추가
console.log(animals);
animals.push("snake","kangaroo");
console.log(animals);

//for 문으로 1+10을 더한 값을 출력
let total = 0
for(let i = 1; i <= 10; i++) {
    total = total + i;
}

console.log(total);

for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}

for(const animal of animals) {
    console.log(animal)
}

animals.forEach( (animal, index) => {
    console.log(`${index + 1}. ${animal} `)
})