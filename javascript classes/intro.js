// output

// console ✅✅

// console.log("hello world");
// console.log(2 + 2);
// console.log(23 ** 23);

// alert ✅
// window.alert("hello world");
// alert("hello world");

// do not use ❌
// document.write("hello world");

// prompt("Enter your name", "john doe");

// ======== variables
// empty containers used to store data, having a label on then known as 'variable name' or 'identifier'

// how to create a variable

// "var" keyword is used (pre es6) to declare a variable

var age; // declaration
age = 23; // initialization

var yourage = 34; // declaration and initialization

// variable naming conventions

// rules
// 1. no space
// var my name;

// 2. a variable name cannot start with a number but can include or end with a number
// var 1name;

// 3. a variable name cannot start, include or end with a special symbol, except "$" and "_"
// var @name;

// 4. Do not use reserved keywords

// var for;

// suggestion

// 1. start variable name with lowercase letter

// 2. in case of multiword variable name use : camelCasing or snake_casing

var helloworldmynameis;
var helloWorldMyNameIs; // camelCasing
var hello_world_my_name_is; // snake_casing

var yourName = prompt("Enter your name : ");
console.log(yourName);
