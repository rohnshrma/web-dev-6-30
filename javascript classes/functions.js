// function declaration

//syntax

// function funcName(parameters){
// // code to be executed
// }

// function calcBmi() {
//   var weight = parseInt(prompt("Enter your weight (in kg's) : "));
//   var height = parseFloat(prompt("Enter your height (in meter's) : "));
//   var bmi = weight / height ** 2;
//   if (bmi < 18.5) {
//     console.log(`Underweight! as your bmi is ${bmi}`);
//   } else if (bmi >= 18.5 && bmi < 25) {
//     console.log(`Normal weight! as your bmi is ${bmi}`);
//   } else if (bmi >= 25 && bmi < 30) {
//     console.log(`Over weight! as your bmi is ${bmi}`);
//   } else {
//     console.log(`Obesse! as your bmi is ${bmi}`);
//   }
// }

// calcBmi();

// function addition(x, y) {
//   // parameters
//   console.log(x + y);
// }

// addition(23, 4); // argument
// addition("john", "doe");

// function calcBmi(weight, height) {
//   var bmi = weight / height ** 2;
//   if (bmi < 18.5) {
//     console.log(`Underweight! as your bmi is ${bmi}`);
//   } else if (bmi >= 18.5 && bmi < 25) {
//     console.log(`Normal weight! as your bmi is ${bmi}`);
//   } else if (bmi >= 25 && bmi < 30) {
//     console.log(`Over weight! as your bmi is ${bmi}`);
//   } else {
//     console.log(`Obesse! as your bmi is ${bmi}`);
//   }
// }

// calcBmi(80, 1.8);
// calcBmi(80, 1.8);
// calcBmi(80, 1.8);
// calcBmi(80, 1.8);
// calcBmi(80, 1.8);
// calcBmi(80, 1.8);

// 2. Print a reverse star pattern for 6 rows:
//  ******
//  *****
//  ****
//  ***
//  **
//  *

// function printStar(rows) {
//   for (var i = rows; i >= 1; i -= 1) {
//     console.log("*".repeat(i));
//   }
// }
// // 3. Calculate and print the sum of all even numbers from 10 to 60.
// function printSum(start, end) {
//   var sum = 0;
//   for (var i = start; i <= end; i += 1) {
//     sum += i;
//   }
//   console.log(`Sum of all numbers between ${start} and ${end} is ${sum}`);
// }

// //  Print numbers from 1 to 40, skipping multiples of 6.

// function printNums(start, stop, skip) {
//   for (var i = start; i <= stop; i += 1) {
//     if (i % skip !== 0) {
//       console.log(i);
//     }
//   }
// }

// function checkPrime(start, end) {
//   for (var i = start; i <= end; i += 1) {
//     var isPrime = true;
//     if (i < 2) {
//       console.log(i, "not a prime");
//     } else {
//       for (var j = 2; j < i; j += 1) {
//         if (i % j === 0) {
//           isPrime = false;
//           break;
//         }
//       }
//     }
//     if (isPrime) {
//       console.log(i, "is prime");
//     } else {
//       console.log(i, "is not prime");
//     }
//     // console.log(`${i} is ${isPrime ? "Prime" : "Not a Prime"}`);
//   }
// }

// discussing scope
// Scope determines the accessibility (visibility) of variables in different parts of the code.
// There are mainly two types of scope in JavaScript: global scope and local (function) scope.

var name = "john"; // global scope
// - Declares a variable `name` in the global scope using `var`, accessible everywhere.

function square(num) {
  var result = num ** 2; // local scope variable
  console.log(result, name);
}
// - Defines a function `square` that takes a parameter `num`.
// - Declares `result` in local scope, computes `num` squared, and logs `result` and `name`.

// square(34);
// - Commented out: Would call `square` with `num = 34`, logging `1156 john`.

// console.log(result);
// - Commented out: Would throw a `ReferenceError` because `result` is local to `square`.

// return keyword is used primarily to terminate a function, and optionally return something out of function
// - `return` stops function execution and optionally sends a value back.

function calcBmi(weight, height) {
  console.log("hello");
  return weight / height ** 2;
  console.log("hello"); // unreachable code
}
// - Defines `calcBmi` to calculate BMI using `weight / height²`.
// - Logs "hello", returns the BMI, and ignores code after `return`.

// var pranjal_bmi = calcBmi(100, 1.7);
// - Commented out: Would call `calcBmi(100, 1.7)`, log "hello", and store BMI (~34.602).

function calcAge(yob) {
  return new Date().getFullYear() - yob;
}
// - Defines `calcAge` to compute age by subtracting `yob` from the current year.

// var myAge = calcAge(1995);
// - Commented out: Would call `calcAge(1995)` and store the age (e.g., 30 for 2025).

// console.log(myAge);
// - Commented out: Would log the value of `myAge` (e.g., 30).

// function expressions : anonymous function and arrow function
// - Function expressions are functions assigned to variables, not hoisted like declarations.

// ============= anonymous function (function without name)
// - Anonymous functions lack a name, used in expressions or as callbacks.

// syntax
//  function (parameters(optional)){
// code to be executed
//  }
// - Describes anonymous function syntax: optional parameters, code in curly braces.

// 1. assign it as a value to a variable

var addition = function (a, b) {
  return a + b;
};
// - Defines an anonymous function that adds `a` and `b`, assigned to `addition`.

// console.log(addition(23, 45));
// - Commented out: Would call `addition(23, 45)` and log `68`.

// var res = addition(34, 45);
// - Commented out: Would call `addition(34, 45)` and store `79` in `res`.

// console.log(res);
// - Commented out: Would log the value of `res` (e.g., 79).

// 2. as a callback

var lifeSpan = function (average_age, ageFn) {
  var age = ageFn();
  var years_left = average_age - age;
  console.log(
    `Years Left : ${years_left}\nMonths Left : ${
      years_left * 12
    }\nWeeks Left : ${years_left * 52}\nDays Left : ${years_left * 365}`
  );
};
// - Defines `lifeSpan` as a function expression, takes `average_age` and callback `ageFn`.
// - Calls `ageFn` to get age, calculates remaining years, and logs years/months/weeks/days.

// lifeSpan(90, function () {
//   var yob = parseInt(prompt("Enter year of birth : "));
//   return new Date().getFullYear() - yob;
// });
// - Commented out: Would call `lifeSpan` with `average_age = 90` and an anonymous function.
// - The callback prompts for year of birth and returns age (e.g., 30 for 1995 in 2025).

// callback function
// when a function is passed as a parameter, into another function
// the passed function is referred as callback function
// - Callbacks are functions passed as arguments, executed by the receiving function.

var calcAge = function () {
  var yob = parseInt(prompt("Enter year of birth : "));
  return new Date().getFullYear() - yob;
};
// - Defines `calcAge` as a function expression that prompts for year of birth and returns age.

// var lifeSpan = function (average_age, ageFn) {
//   var age = ageFn();
//   var years_left = average_age - age;
//   console.log(
//     `Years Left : ${years_left}\nMonths Left : ${
//       years_left * 12
//     }\nWeeks Left : ${years_left * 52}\nDays Left : ${years_left * 365}`
//   );
// };
// - Commented out: Redefines `lifeSpan` (same as above), included for completeness.

// lifeSpan(90, calcAge);
// - Commented out: Would call `lifeSpan` with `average_age = 90` and `calcAge` as callback.

// ============= arrow function
// - Arrow functions (ES6) are concise function expressions with `=>` syntax, no own `this`.

// basic syntax
//  (parameters)=>{
// code to be executed
//  }
// - Describes arrow function syntax: optional parameters, code after `=>`.

// 1. assign it as a value to a variable

var addition = (a, b) => {
  return a + b;
};
// - Defines an arrow function that adds `a` and `b`, assigned to `addition`.

// console.log(addition(23, 45));
// - Commented out: Would call `addition(23, 45)` and log `68`.

// var res = addition(34, 45);
// - Commented out: Would call `addition(34, 45)` and store `79` in `res`.

// console.log(res);
// - Commented out: Would log the value of `res` (e.g., 79).

// 2. as a callback

var lifeSpan = (average_age, ageFn) => {
  var age = ageFn();
  var years_left = average_age - age;
  console.log(
    `Years Left : ${years_left}\nMonths Left : ${
      years_left * 12
    }\nWeeks Left : ${years_left * 52}\nDays Left : ${years_left * 365}`
  );
};
// - Defines `lifeSpan` as an arrow function, takes `average_age` and callback `ageFn`.
// - Functionality is identical to the earlier `lifeSpan` function expression.

// lifeSpan(90, () => {
//   var yob = parseInt(prompt("Enter year of birth : "));
//   return new Date().getFullYear() - yob;
// });
// - Commented out: Would call `lifeSpan` with `average_age = 90` and an arrow function callback.
// - The callback prompts for year of birth and returns age.

// ================ TASkS

// Task 1: Using the Return Keyword
// Write a function `calcArea` that takes `radius` and returns the area of a circle (Math.PI * radius^2).
// Include a console.log after the return to show it’s unreachable.
// Store and log the result.

// Task 2: Anonymous Function
// Assign an anonymous function to `square` that takes a number and returns its square.
// Use it in a function `printSquare` as a callback to log the result with a message.
// Test with positive and negative numbers.

// Task 3: Arrow Function
// Create an arrow function `sumArray` that takes an array and returns the sum using reduce.
// Use it in a function `logSum` as a callback to log the sum with a prefix.
// Test with different arrays.

// Task 4: Callback Function
// Write a function `calcTime` that takes `distance` and a callback for speed, returning time (distance /speed).
// Use an anonymous function to return a speed of 50 km/h.
// Log the result for multiple distances.

// Task 5: Return Keyword
// Create a function `calcDiscount` that takes `price` and `discountPercent`, returning the discounted price.
// Add a console.log after the return to demonstrate unreachable code.
// Store and log the result.

// Task 6: Anonymous Function
// Assign an anonymous function to `factorial` that calculates the factorial of a number.
// Use it as a callback in a function `displayFactorial` to log the result with a message.
// Test with numbers 0 to 5.

// Task 7: Arrow Function
// Write an arrow function `maxValue` that takes an array and returns the maximum value using Math.max and spread operator.
// Use it in a function `formatMax` as a callback to log the maximum with a message.
// Test with different arrays.

// Task 8: Callback Function
// Create a function `calcCost` that takes `quantity` and a callback for unit price, returning total cost.
// Use an anonymous function to return a unit price based on item type (e.g., "book" returns 20).
// Log the result for different quantities.

// Task 9: Return Keyword
// Write a function `convertTemp` that takes `celsius` and returns Fahrenheit (celsius * 9/5 + 32).
// Include unreachable code after the return.
// Store and log the converted temperature.

// Task 10: Anonymous Function
// Assign an anonymous function to `power` that takes a base and exponent, returning base^exponent.
// Use it in a function `logPower` as a callback to log the result.
// Test with different base and exponent values.

// Task 11: Arrow Function
// Create an arrow function `filterEvens` that takes an array and returns only even numbers using filter.
// Use it in a function `displayEvens` as a callback to log the filtered array.
// Test with arrays containing mixed numbers.

// Task 12: Callback Function
// Write a function `calcLoanPayment` that takes `principal` and a callback for interest rate, returning monthly payment (principal * rate / 12).
// Use an anonymous function to return an interest rate of 5%.
// Log the result for different principal amounts.

// Task 13: Return Keyword
// Create a function `calcHypotenuse` that takes two sides of a right triangle and returns the hypotenuse (Math.sqrt(a^2 + b^2)).
// Add unreachable code after the return.
// Store and log the result.

// Task 14: Anonymous Function
// Assign an anonymous function to `isPrime` that takes a number and returns true if it’s prime, false otherwise.
// Use it in a function `checkPrime` as a callback to log whether the number is prime.
// Test with numbers like 2, 4, 17.

// Task 15: Arrow Function
// Write an arrow function `averageGrades` that takes an array of grades and returns their average.
// Use it in a function `gradeReport` as a callback to log the average with a pass/fail message
// (pass if average >= 60).
// Test with different grade arrays.

// var averageGrades = (grades) => {
//   var sum = 0;
//   for (var i = 0; i < grades.length; i++) {
//     sum += grades[i];
//   }
//   return sum / grades.length;
// };

// var gradeReport = (cb, grades) => {
//   var average = cb(grades);
//   if (average >= 60) {
//     return "Pass";
//   } else {
//     return "Fail";
//   }
// };

// gradeReport(averageGrades, [67, 89, 67, 56, 34, 78]);

// app : 2

var gradeReport = (cb, grades) => (cb(grades) >= 60 ? "Pass" : "Fail");

gradeReport(
  (grades) => {
    var sum = 0;
    for (var i = 0; i < grades.length; i++) {
      sum += grades[i];
    }
    return sum / grades.length;
  },
  [67, 89, 67, 56, 34, 78]
);

// Task 16: Callback Function
// Create a function `estimateSavings` that takes `monthlyDeposit` and a callback for years, returning total savings (deposit * years * 12).
// Use an anonymous function to return a fixed 10 years.
// Log the result for different deposits.

// Task 17: Return Keyword
// Write a function `calcSpeed` that takes `distance` and `time`, returning speed (distance / time).
// Include unreachable code after the return.
// Store and log the speed.

// Task 18: Anonymous Function
// Assign an anonymous function to `reverseString` that takes a string and returns it reversed.
// Use it in a function `formatReverse` as a callback to log the reversed string with a message.
// Test with different strings.

// Task 19: Arrow Function
// Create an arrow function `countVowels` that takes a string and returns the number of vowels (a, e, i, o, u).
// Use it in a function `vowelReport` as a callback to log the vowel count.
// Test with different strings.

// Task 20: Callback Function
// Write a function `planEvent` that takes `budget` and a callback for event cost, returning remaining budget.
// Use an anonymous function to return a cost based on event type (e.g., "wedding" returns 5000).
// Use an arrow function in a function `eventSummary` to log the remaining budget with a message.
// Test with different budgets and event types.

// ========================= arrow function syntax 2 and 3

//  in case of exact 1 parameter , () can be ommited
//  if all your function does is return something , return and {} can be omitted

var checkPalindrome = (txt) =>
  txt.split("").reverse().join("") === txt ? "Palindrome" : "Not A Palindrome";

// var checkPalindrome = (txt) => {
//   var rev = "";
//   for (var i = txt.length - 1; i >= 0; i -= 1) {
//     rev += txt[i];
//   }
//   if (rev === txt) {
//     return "Palindrome";
//   } else {
//     return "Not a Palindrome";
//   }
// };

var res = checkPalindrome("poop");
console.log(res);

// 10
var power = (base, exponent) => base ** exponent;

var logInfo = (cb, base, exponent) => {
  console.log(cb(base, exponent));
};

logInfo(power, 12, 2);

// Task 10: Anonymous Function
// Assign an anonymous function to `power` that takes a base and exponent, returning base^exponent.
// Use it in a function `logPower` as a callback to log the result.
// Test with different base and exponent values.****

var power = function (base, exponent) {
  return base ** exponent;
};
function logPower(base, exponent, callback) {
  var result = callback(base, exponent);
  console.log(result);
}
logPower(2, 3, power);

// Task 11: Arrow Function
// Create an arrow function `filterEvens` that takes an array and returns only even numbers using filter.
// Use it in a function `displayEvens` as a callback to log the filtered array.
// Test with arrays containing mixed numbers.

const filterEvens = (nums) => {
  var evens = [];
  for (var i = 0; i < nums.length; i += 1) {
    if (nums[i] % 2 === 0) {
      evens.push(nums[i]);
    }
  }
  return evens;
};

// Task 12: Callback Function
// Write a function `calcLoanPayment` that takes `principal` and a callback for interest rate,
// returning monthly payment (principal * rate / 12).
// Use an anonymous function to return an interest rate of 5%.
// Log the result for different principal amounts.
const calcLoanPayment = (principal, cb) => {
  var rate = cb();
  return `your monthly  payment will be ${
    (principal * rate) / 100 / 12 + principal / 12
  } `;
};

var res = calcLoanPayment(10000, function () {
  return parseInt(prompt("Enter intrest rate"));
});

console.log(res);
