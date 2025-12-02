// 1. users 배열에서 모든 사용자의 이름만 배열로 추출하세요.
const users = [
  { name: "Ghost", age: 20 },
  { name: "Irangi", age: 22 },
  { name: "Camel", age: 19 },
];
const names = users.map((user) => user.name);
console.log(names);

//2. user 객체를 복사하여 age만 30으로 바꾼 새 객체를 만드세요.
const user = { name: "Ghost", age: 20 };
const age = { ...user, age:30};
console.log(age)

// 3. person 객체에 동적으로 key와 value를 추가하세요.
// (key: hobby, value: soccer)
const person = {
    name : '지윤',
    age : 24,
    breed : 'korea',
};
console.log(person.name);
console.log(person.age);
console.log(person["breed"]);

person.hobby = "soccer";
console.log(person);

// 4. person의 name값을 출력하세요
const person1 = { name: "Ghost", age: 500 };
console.log(person1.name)

// 5. 두 객체 obj1, obj2를 합쳐서 새 객체를 만드세요.
const obj1 = { a: 1 };
const obj2 = { b: 2 };
const newPerson = {...obj1, ...obj2}
console.log("newPerson :", newPerson);
