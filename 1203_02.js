const person = {
     name: 'Ghost', 
     age: 20,
     mbti:null,
    };

console.log(Object.keys(person).length);

//person에 있는 값(value)를 통해, null이 있는지 확인해보자.
//있으면 true 없으면 false
//include() 메서드 사용

  const hasNull = Object.values(person).includes(null);
  console.log(hasNull);

  const task = [
    {id: 1, text:"walk"},
    {id: 2, text:"running"},

  ]

  const newTask = {id: 3, text: "programing"};

  const finalTask = [...task, newTask];
  console.log(finalTask);


