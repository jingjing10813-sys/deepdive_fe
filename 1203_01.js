const user = {
    name: 'ghost',
    age:600,
};

//개체의 속성 확인
console.log("name" in user); //true
console.log("mbti" in user); //false

for(const key in user) {
    console.log(`${key} : ${user[key]}`);
}

const keys = Object.keys(user);

console.log(keys);

const values = Object.values(user);
console.log(values);

const entries = Object.entries(user);
console.log(entries);

const target = {a:1, b:2 };
const source = {b: 3, c:4, d: 5};

const total = {...target, ...source};
console.log("total :", total);

const totalAsign = Object.assign(target, source);
console.log("totalAsign : ", totalAsign);

