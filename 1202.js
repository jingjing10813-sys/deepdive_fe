const users = [
  { name: "Alice", score: 75 },
  { name: "Bob", score: 90 },
  { name: "Charlie", score: 85 },
];

//시험점수가 80점이상인 학새들을 추출해서 명단을 만들기
//명단의 변수는 :passedUsers
//['bob', 'charlie']
const passedUsers = users.filter((user) => user.score >= 80).map((user) => user.name);
console.log(passedUsers);
