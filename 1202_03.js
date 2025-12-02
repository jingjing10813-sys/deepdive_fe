const puppy = {
    name : 'bobby',
    age : 3,
    breed : 'sichu',
};

const type = "breed";

console.log(puppy.name);
console.log(puppy.age);
console.log(puppy["breed"]);
console.log(puppy[type]);

//puppy age -> 5
puppy.age = 5
console.log(puppy.age);

puppy.color = "white and black";
console.log(puppy);

delete puppy.color;
console.log(puppy);