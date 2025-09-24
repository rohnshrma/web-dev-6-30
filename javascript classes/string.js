// string

// a sequence of characters (alphabets , numbers, special symbols and whitespace) enclosed in
// single (' '), double (" ") quotes or backticks (` `)

var yourName = "john doe";
var myName = "@johndoe";
var userName = `@johndoe`;

// note : value taken as an input using the prompt function of of type "string" by default, but can be
// converted into supported data type

// var age = Number(prompt("Enter your age : "));
// var age = parseInt(prompt("Enter your age : "));
// var age = parseFloat(prompt("Enter your age : "));

// console.log(typeof age, age);

// concatenation
// adding two or more string together

// console.log(typeof 123 + 123, 123 + 123); // number , 246
// console.log(typeof "123" + 123, "123" + 123); // string , 123123
// console.log(typeof "123" + "123", "123" + "123"); // string , 123123

// unary + and -
// console.log(+"123" + 123); // number , 246
// console.log(-"123" + 123); // number , 0

// var fName = prompt("Enter your first name : ");
// var lName = prompt("Enter your last name : ");
// var age = parseInt(prompt("Enter your age : "));

// console.log(
//   "hello world my name is " +
//     fName +
//     " " +
//     lName +
//     " and i am " +
//     age +
//     " years old"
// );

// template literal
// `` are used to create a template literal , where variables and expressions are inserted using ${}

// console.log(
//   `Hello world my name is ${fName} ${lName} and i am ${age ** 2} years old`
// );

// the str.length property returns number of characters in a string
// console.log(fName.length);

// indexing
// syntax
//         str[ index ]
// counting starting from 0 used to access characters of a string

// h e l l o
// 1 2 3 4 5 : normal counting
// 0 1 2 3 4 : positive indexing (l-r)
//-5-4-3-2-1 : negative indexing (r-l)

// first character is always on the 0th position
// last character is always on the str.length - 1 = th position

var txt = "hello";
// console.log(txt[0]);
// console.log(txt[txt.length - 1]);

// string methods

// return a new string with all alphabets in uppercase
txt.toUpperCase();
// return a new string with all alphabets in lowercase
txt.toLowerCase();

// return character on the specified index (doesn't support negative indexing)
console.log(txt.charAt(0)); // index
console.log(txt.charAt(txt.length - 1)); //index
console.log(txt.charAt(-1));

// return character on the specified index (support negative indexing)
console.log(txt.at(0)); // index
console.log(txt.at(txt.length - 1)); //index
console.log(txt.at(-1));

// return true if the string includes the specified substring
console.log(txt.includes("@")); // substring
console.log(txt.includes("o")); // substring

// return true if the string starts with the specified substring, else false
console.log(txt.startsWith("o")); // substring
console.log(txt.startsWith("h")); // substring
console.log(txt.startsWith("h", 2)); // substring, start index(inclusive)
console.log(txt.startsWith("l", 2)); // substring, start index(inclusive)

// return true if the string ends with the specified substring, else false
console.log(txt.endsWith("o")); // substring
console.log(txt.endsWith("h")); // substring
console.log(txt.endsWith("h", 4)); // substring, end index(exclusive) 0-3
console.log(txt.endsWith("l", 4)); // substring, end index(exclusive) 0-3
// Define string for method demonstrations
var sent = "hello world my name is john doe"; // String with 30 characters, including spaces

// split(splitter, limit): Splits string into an array based on splitter (string or regex); optional limit (integer) caps number of resulting items
console.log(sent.split()); // Outputs ["hello world my name is john doe"] (no splitter, entire string as one array item)
console.log(sent.split("")); // Outputs ["h","e","l","l","o"," ","w","o","r","l","d"," ","m","y"," ","n","a","m","e"," ","i","s"," ","j","o","h","n"," ","d","o","e"] (empty string splitter, each character as an array item)
console.log(sent.split(" ")); // Outputs ["hello","world","my","name","is","john","doe"] (splits on space, each word as an array item)
console.log(sent.split("a")); // Outputs ["hello world my n","me is john doe"] (splits on "a", creating two items)
console.log(sent.split(" ", 2)); // Outputs ["hello","world"] (splits on space, limits to 2 items)
console.log(sent.split("", 2)); // Outputs ["h","e"] (splits on each character, limits to 2 items)

// replace(old, new): Replaces first occurrence of old (string or regex) with new (string); returns new string
console.log(sent.replace("l", "x")); // Outputs "hexlo world my name is john doe" (replaces first "l" with "x")

// replaceAll(old, new): Replaces all occurrences of old (string or regex) with new (string); returns new string
console.log(sent.replaceAll("l", "x")); // Outputs "hexxo worxd my name is john doe" (replaces all "l" with "x")

// trim(): Removes leading and trailing whitespace; returns new string
console.log("          hello world        ".trim()); // Outputs "hello world" (removes spaces before and after)

// trimStart(): Removes leading whitespace; returns new string
console.log("          hello world        ".trimStart()); // Outputs "hello world        " (removes spaces before, keeps trailing spaces)

// trimEnd(): Removes trailing whitespace; returns new string
console.log("          hello world        ".trimEnd()); // Outputs "          hello world" (removes spaces after, keeps leading spaces)

// slice(start, stop): Returns substring from start (inclusive, integer) to stop (exclusive, integer); supports negative indexes
console.log(sent.slice(0, 5)); // Outputs "hello" (substring from index 0 to 4)

// substring(start, stop): Returns substring from start (inclusive, integer) to stop (exclusive, integer); negative indexes treated as 0
console.log(sent.substring(0, 5)); // Outputs "hello" (substring from index 0 to 4)

// console.log(sent.search(/s/g));      // Commented out: search() finds index of first match of regex; /s/g finds all "s" but search() ignores global flag, outputs index of first "s" (22)

// repeat(count): Repeats string count (integer) times; returns new string
console.log(sent.repeat(3)); // Outputs "hello world my name is john doehello world my name is john doehello world my name is john doe" (repeats string 3 times)

// padEnd(targetLength, padString): Pads string at end to reach targetLength (integer) using padString (string, optional, defaults to space); returns new string
console.log(sent.padEnd(40)); // Outputs "hello world my name is john doe          " (pads with spaces to length 40)
console.log(sent.padEnd(40, "*#")); // Outputs "hello world my name is john doe*#*#*#*#*#" (pads with "*#" to length 40)

// padStart(targetLength, padString): Pads string at start to reach targetLength (integer) using padString (string, optional, defaults to space); returns new string
console.log(sent.padStart(40)); // Outputs "          hello world my name is john doe" (pads with spaces to length 40)
console.log(sent.padStart(40, "*#")); // Outputs "*#*#*#*#*#hello world my name is john doe" (pads with "*#" to length 40)

// match(regex): Returns array of matches for regex (or null if no matches); global flag (/g) returns all matches
console.log(sent.match(/l/g)); // Outputs ["l","l","l"] (finds all "l" characters in string)

// indexOf(substring, start): Returns index of first occurrence of substring (string) from start (integer, optional, default 0); returns -1 if not found
console.log(sent.indexOf("l")); // Outputs 2 (first "l" at index 2 in "hello")
console.log(sent.indexOf("l", 3)); // Outputs 3 (first "l" from index 3 onward)

// lastIndexOf(substring, start): Returns index of last occurrence of substring (string) searching backward from start (integer, optional, default string length); returns -1 if not found
console.log(sent.lastIndexOf("l")); // Outputs 9 (last "l" at index 9 in "world")
console.log(sent.lastIndexOf("l", 3)); // Outputs 3 (last "l" searching backward from index 3)
