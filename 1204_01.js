const obj = {
    name : 'ghost',
    age : 500,
    sayhello : function () {
        console.log(`Hello, ${this.name}`);
    },

    sayGoodbye: () => {
        console.log(`Good-bye, ${this.name}`)
    },

    printAge() {
        console.log(`${this.name} is ${this.age} years old.`);
    },
};

obj.sayhello();
obj.sayGoodbye(); //undefined
obj.printAge();
