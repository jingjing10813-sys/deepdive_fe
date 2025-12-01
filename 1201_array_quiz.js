const numbers = [38, 25, 12, 3, 8];

// 10이하의 숫자만 출력하시오
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] <= 10) {
        console.log(numbers[i]);
    }
}
const fruits = ["banana", "lemon", "apple mango", "lime", "melon"];

//위의 과일중 5글자 이하만 출력하시오

for (let i = 0; i < fruits.length; i++) {
    if (fruits[i].length <= 5) {
        console.log(fruits[i]);
    }
}