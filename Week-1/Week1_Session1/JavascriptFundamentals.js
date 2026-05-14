// First JavaScript Program

// Single-line comment

/*
  Multi-line comment
*/

// let is used to declare variables
let num1;

// assigning value
num1 = 31;

// prints output in console
console.log("value of num1 is", num1);

// declaring and initializing variable
let num2 = 100;

// string data type
let studentName = "hasrith rao";

// boolean data type
let isActive = true;

// array: stores multiple values
let marks = [95, "hasrith", 77];

console.log(marks);

// object: stores key-value pairs
let student = {
  id: 100,
  studentName: "hasrith rao"
};

console.log(student);

/*
  Node.js is a runtime environment for JavaScript.
  Semicolon (;) is optional in JS.
  Strings can use single or double quotes.
  JS supports different data types in one array.
  JS is dynamically typed.
*/

// undefined example
let value;

console.log(typeof value); // undefined

value = 20;
console.log(typeof value); // number

value = [96, "hasrith", 77];

console.log(typeof value); // object

/*
  typeof checks datatype.
  Arrays are also objects in JS.
*/

/*
  Memory:

  Stack:
  - Stores primitive values
  - Stores references

  Heap:
  - Stores actual objects and arrays
*/

/*
  Stack -> primitive values + references
  Heap  -> actual objects and arrays
*/

/*
  Compilation in JS:

  JS checks declarations and scope before execution.
  let and const cannot be used before initialization.
*/

// Example:
// console.log(num2); // Error
// let num2 = 100;

/*
  == compares values.
  === compares value and datatype.
*/

let firstNum = 100;
let secondNum = "100";

console.log(firstNum == secondNum);  // true
console.log(firstNum === secondNum); // false

/*
  Control Statements:

  Decision making:
  - if
  - if else
  - if else if
  - switch

  Loops:
  - for
  - while
  - do while
*/

/*
  for loop:
  Used when iterations are known.

  while loop:
  Used when iterations are not fixed.
*/

/*
  Array:

  - Stores multiple values.
  - Size can change.
  - push() adds elements.
*/

let numbers = [10, 20, 30];

numbers.push(40); // adds element at end

console.log(numbers);

/*
  Functions:

  Function is a reusable block of code.
  It runs only when called.
*/

// function declaration
function addNumbers(num1, num2) {
  let sum = num1 + num2;
  return sum;
}

// function call
let answer = addNumbers(10, 20);

console.log(answer);

/*
  Function Expression:

  Function can be stored in a variable.
  Function without name is anonymous.
*/

let calculateSum = function(num1, num2) {
  let sum = num1 + num2;
  return sum;
};

// function call
let answer1 = calculateSum(50, 32);

console.log(answer1);

/*
  Arrow Function:

  Short way to write function expression.
*/

let add = (num1, num2) => num1 + num2;

let answer2 = add(1, 2);

console.log(answer2);