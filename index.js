// let num1 = 23;
// let num2 = 45;
// let result = num1 + num2;
// console.log(`sum of numbers ${num1} and ${num2} is ${result} `);
// ${} place holders it prints the value of variable which is given in curly bracket.
// to import files creat a filoe and then import by the below syntax
// let add = require("./math.js");
const math = require("./math.js");
// we use const when we know that the value of the varaible is not going to change
// using let helps us to redifine the value of the varaiable
console.log(math)

let num1 = parseInt(process.argv[2]);
let num2 = parseInt(process.argv[3]);
let result = math.add(num1, num2);
// the dot property is used to acess the any property from the file ex math.add give an acess to add 
console.log(`sum of numbers ${num1} and ${num2} is ${result} `);
