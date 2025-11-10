// array
// a reference data type used to store mulitiple values of similar or different data types
// [ ] are used to create an array , where values are seperated using ","

var marks = [23, 2, 2, 2, 32, 3, 4, 223, 2, 32];
console.log(marks[0]);
console.log(marks[1]);
console.log(marks[2]);

// methods

// add a new item at the end of an array
marks.push(1000);
console.log(marks);

// add a new item at the start of an array
marks.unshift(1000);
console.log(marks);

// removes an  item from the start of an array
marks.shift();
console.log(marks);

// removes an  item from the end of an array
marks.pop();
console.log(marks);

// marks.splice(1, 0, 2000); // insert index , devare count, item/s
// marks.splice(1, 1, 2000); // insert index , devare count, item/s
// marks.splice(1, 2, 2000, 234); // insert index , devare count, item/s

console.log(marks);

// hof

// map , sort, filter , forEach and reduce

// forEach

// arr.forEach((item, index , array)=>{
// no return
// })

// for (var i = 0; i < marks.length; i += 1) {
//   console.log(marks[i]);
// }

// marks.forEach((m) => {
//   console.log(m);
// });

// var sum = 0;

// for (var i = 0; i < marks.length; i += 1) {
//   sum += marks[i];
// }

// marks.forEach((m) => {
//   sum += m;
// });

// console.log(sum);

// var double = marks.map((m) => m * 2);

// console.log(double);

// var double = [];

// marks.forEach((m) => double.push(m * 2));

// console.log(double);

// var double = [];

// for (var i = 0; i < marks.length; i++) {
//   double.push(marks[i] * 2);
// }

// console.log(double);

// var res = marks.map((m) => (m % 2 === 0 ? `${m} is even` : `${m} is odd`));
// console.log(res);

// filter out even numbers from marks

var evens = [];
marks.forEach((m) => {
  if (m % 2 === 0) {
    evens.push(m);
  }
});

console.log(evens);

var evens = marks.filter((m) => m % 2 === 0);

console.log(evens);

// Practical Assignment: 20 Tasks on map, forEach, filter, and their equivalents using loops
// Instructions: Solve each task using the specified method (map, forEach, filter, or loops).
// Assume arrays are defined as needed (e.g., numbers = [1, 2, 3, 4, 5], names = ["Alice", "Bob", "Charlie"]).
// Write the solutions as JavaScript code under each comment.

// Task 1: Use forEach to print each element of an array of numbers.
var numbers = [1, 2, 3, 4, 5];
// Your code here:

// Task 2: Use a for loop to print each element of an array of numbers (same as Task 1).
// Your code here:

// Task 3: Use map to create a new array with each number doubled.
var numbers = [1, 2, 3, 4, 5];
// Your code here:

// Task 4: Use a for loop to create a new array with each number doubled (same as Task 3).
// Your code here:

// Task 5: Use filter to get all numbers greater than 10 from an array.
var numbers = [5, 12, 8, 15, 3, 20];
// Your code here:

// Task 6: Use a for loop to get all numbers greater than 10 from an array (same as Task 5).
// Your code here:

// Task 7: Use forEach to print the square of each number in an array.
var numbers = [2, 4, 6, 8];
// Your code here:

// Task 8: Use map to create an array of strings indicating if each number is even or odd.
var numbers = [1, 2, 3, 4, 5];
// Your code here:

// Task 9: Use a for loop to create an array of strings indicating if each number is even or odd (same as Task 8).
// Your code here:

// Task 10: Use filter to get all strings longer than 3 characters from an array of names.
var names = ["Alice", "Bob", "Charlie", "Eve"];
// Your code here:

// Task 11: Use a for loop to get all strings longer than 3 characters from an array of names (same as Task 10).
// Your code here:

// Task 12: Use map to convert an array of names to uppercase.
var names = ["alice", "bob", "charlie"];
// Your code here:

// Task 13: Use forEach to sum all numbers in an array and print the result.
var numbers = [10, 20, 30, 40];
// Your code here:

// Task 14: Use a for loop to sum all numbers in an array and print the result (same as Task 13).
// Your code here:

// Task 15: Use filter to get all positive numbers from an array of mixed numbers.
var numbers = [-2, 5, -10, 8, 0, 12];
// Your code here:

// Task 16: Use map to create an array of objects from an array of numbers, each object having a 'value' property.
var numbers = [1, 2, 3];
// Your code here:

// Task 17: Use forEach to print only the first varter of each name in an array.
var names = ["Alice", "Bob", "Charlie"];
// Your code here:

// Task 18: Use a for loop to create an array of the first varters of each name (similar to Task 17 but collecting results).
// Your code here:

// Task 19: Use filter to get all numbers divisible by 3 from an array.
var numbers = [3, 4, 6, 7, 9, 12];
// Your code here:

// Task 20: Use a for loop to create an array of numbers divisible by 3 (same as Task 19).
// Your code here:

for (var i = 0; i < marks.length; i += 1) {
  console.log(marks[i]);
}

marks.forEach((m) => console.log(m));

var names = ["alice", "bob", "cherry"];
var res = names.filter((name) => name.length > 3);
console.log(res);

var upper = names.map((name) => name.toUpperCase());
console.log(upper);

// Task 15: Use filter to get all positive numbers from an array of mixed numbers.
var numbers = [-2, 5, -10, 8, 0, 12];
// Your code here:

var positives = numbers.filter((n) => n > 0);
console.log(positives);

// // Task 16: Use map to create an array of objects from an array of numbers, each object having a 'value' property.
// var numbers = [1, 2, 3];
// // Your code here:

// Task 3: Use map to create a new array with each number doubled.
var numbers = [1, 2, 3, 4, 5];
// Your code here:
var double = numbers.map((m) => m * 2);
console.log(double);

// Task 4: Use a for loop to create a new array with each number doubled (same as Task 3).
// Your code here:

var double = [];
for (var i = 0; i < numbers.length; i += 1) {
  double.push(numbers[i] * 2);
}
console.log(double);

// reduce

// case 1 : value of acc is not explicitly specified

// acc = marks[0] ( 23)
// cv = marks[1] (2)

var total = marks.reduce((acc, cv) => {
  // acc += cv
  // console.log(acc, cv);
  return acc + cv;
});

console.log(total);

// without reduce

// var sum = 0;

// marks.forEach((m) => {
//   sum += m;
// });
// console.log(sum);

// finding max value
// var max = marks[0];

// marks.forEach((cv) => {
//   if (cv > max) {
//     max = cv;
//   }
// });

// console.log("max =>", max);

// case 2 :
// when value of acc is explicitly specified

// max = value provided (23)
// cv = marks[0] (23)

var max = marks.reduce((max, cv) => {
  if (cv > max) {
    // max = cv
    return cv;
  } else {
    // max = max
    return max;
  }
}, marks[0]);

console.log(max);

var min = marks.reduce((min, cv) => {
  if (cv < min) {
    // max = cv
    return cv;
  } else {
    // max = max
    return min;
  }
}, marks[0]);

console.log(min);

// sort
marks.sort((a, b) => {
  return a - b; // ascending
});

console.log(marks);

marks.sort((a, b) => {
  return b - a; // descending
});

console.log(marks);

var words = ["hello", "world", "my", "name", "john", "doe"];
var sentence = words.reduce((acc, cv) => acc + " " + cv);
console.log(sentence.trim());

// Task 3: Use reduce to count the occurrences of a specific number in an array.

console.log(marks);

var count_of_2 = marks.reduce((count, cv) => {
  if (cv === 2) {
    return (count += 1);
  }
  return count;
}, 0);
console.log(count_of_2);

// Tasks based on the concepts (reduce and sort):
// Task 1: Use reduce to calculate the product of all numbers in an array.
// Task 2: Use reduce to concatenate all strings in an array of strings into a single string.
// Task 3: Use reduce to count the occurrences of a specific number in an array.
// Task 4: Use reduce to find the second largest number in an array.
// Task 5: Use sort to arrange an array of strings in alphabetical order (case-insensitive).
// Task 6: Use reduce to create an object that groups array elements by their frequency.
// Task 7: Use sort to order an array of objects by a specific property (e.g., age or name).
// Task 8: Use reduce to compute the average of numbers in an array.
// Task 9: Use sort to arrange an array of numbers based on their absolute difference from a given target number.
// Task 10: Use reduce to find the longest string in an array of strings.
