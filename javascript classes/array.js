// array
// a reference data type used to store mulitiple values of similar or different data types
// [ ] are used to create an array , where values are seperated using ","

var marks = [23, 2, 32, 3, 4, 223, 2, 32];
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

// marks.splice(1, 0, 2000); // insert index , delete count, item/s
// marks.splice(1, 1, 2000); // insert index , delete count, item/s
// marks.splice(1, 2, 2000, 234); // insert index , delete count, item/s

console.log(marks);
