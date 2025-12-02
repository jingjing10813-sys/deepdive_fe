
//kim 몇번째에 있는지 출력하시오.
//우승자 kim은 _번째 회원입니다.
const winners = ['Lee','Park','Kim','Choi']
const index = winners.indexOf('Kim');
console.log(`우승자 Kim은 ${index + 1}번째 회원입니다.`);

//tags 배열을 하나의 문자열로 합쳐주세요.
//'#Js, #CSS, #HTML'이렇게 출력되도록,
const tags = ["#JS", "#CSS", "#HTML"];
const result = tags.join(", ");   // 콤마 + 공백
console.log(result);

//창고에 'apple'이 있는지 확인하여 true / false를 출력하세요
const stock = ["banana", "orange", "apple", "grape"];
console.log(stock.includes("apple"));

//위의 hashTags 문자열은 배열로 변환하시오(단, 각 문자열 앞에 '#'표시)
// [ 'figma', 'illustrator' , 'photoshop']먼저 출력

const hashTags = "figma, illustrator, photoshop";
result1 = hashTags.split(",").map((tag) => `#${tag}`);
console.log(result1);