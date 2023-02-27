// Use const by default.
const num = 10;
// num =15

console.log(num);

// Template Literals
let name = "mounir";
let lastName = "hassani";

console.log("my name is" + name + " and my last name is" + lastName);
console.log(` my name is ${name} and my last name is ${lastName}`);

// arrow function

function sum(a, b) {
  return a + b;
}
console.log(sum(10, 10));

const somme = (a, b) => {
  return a + b;
};
console.log(somme(15, 20));

// array functions
// forEach function
let array = [10, 20, 40];
array.forEach((em) => console.log((em += 5)));

// map function
let newArray = array.map((el) => (el -= 5));
console.log(newArray);

// filter function

let filter = [-10, 7, 9, 0, -5, 7];
let negative = filter.filter((el) => el < 0);
console.log(negative);

// find function

let find = filter.find((el) => el === 7);
console.log(find);

// findindex function

let findindex = filter.findIndex((el) => el === 7);
console.log(findindex);

// Spreading operator

let nember1 = [1, 2, 3];
let nember2 = [4, 5, 6];

export let spread = [...nember1, ...nember2];

// Module

export default spread;
