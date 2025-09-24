// fixed iteration : the loop runs a fixed number of times

// for (initialization ; condition ; update){
// code to be executed
// }

// for (var water = 0; water < 1000; water += 100) {
//   console.log(water);
// }

// for (var i = 11; i <= 20; i += 1) {
//   console.log(i, "john doe");
// }

// for (var i = 1; i <= 5; i += 1) {
//   console.log(i);
// }

// for (var i = 5; i >= 1; i -= 1) {
//   console.log(i);
// }

// for (var i = 2; i <= 100; i += 2) {
//   console.log(i);
// }

// for (var i = 1; i <= 100; i += 1) {
//   if (i % 2 === 0) {
//     console.log(`${i} Even`);
//   } else {
//     console.log(`${i} Odd`);
//   }
// }

// for (var i = 1; i <= 100; i += 1) {
//   if (i % 5 === 0 && i % 3 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else {
//     console.log(i);
//   }
// }

// 2 x 1 = 2
// 2 x 2 = 4
// 2 x 3 = 6
// 2 x 4 = 8
// 2 x 5 = 10
// 2 x 6 = 12
// 2 x 7 = 14
// 2 x 8 = 16
// 2 x 9 = 18
// 2 x 10 = 20

// var n = parseInt(prompt("Enter a number : "));

// for (var i = 1; i <= 10; i += 1) {
//   console.log(`${n} x ${i} = ${i * n}`);
// }

// working with indexing

// var txt = "hEllO world my nAme is john doe and i live in LA";
var txt = "poop";
// console.log(txt[0]);
// console.log(txt[1]);
// console.log(txt[2]);
// console.log(txt[3]);
// console.log(txt[4]);

// for (var i = 0; i < txt.length; i += 1) {
//   console.log(txt[i]);
// }

// for (var i = txt.length - 1; i >= 0; i -= 1) {
//   console.log(txt[i]);
// }

// var vowelCount = 0;

// for (var i = 0; i < txt.length; i += 1) {
//   if ("aeiou".includes(txt[i].toLowerCase())) {
//     vowelCount += 1;
//   }
// }

// console.log(vowelCount);

// var reversed = "";

// for (var i = txt.length - 1; i >= 0; i -= 1) {
//   reversed += txt[i];
//   console.log(reversed);
// }

// console.log(reversed);

// var reversed = "";

// for (var i = txt.length - 1; i >= 0; i -= 1) {
//   reversed += txt[i];
// }

// if (reversed === txt) console.log(`${txt} is palindrome`);
// else console.log(`${txt} is not palindrome`);

// ====== while loop fixed iteration

// var i = 11; // initialization
// // condition
// while (i <= 20) {
//   console.log(i, "john doe"); // code to be executed
//   i += 1; // update
// }

// var reversed = "";

// var i = txt.length - 1;
// while (i >= 0) {
//   reversed += txt[i];
//   i -= 1;
// }

// if (reversed === txt) console.log(`${txt} is palindrome`);
// else console.log(`${txt} is not palindrome`);

// non fixed iteration in while loop

// continiouslly ask for a person's name , till entered correctly (3 or more characters)

// var yourName = prompt("Enter your name :");

// while (yourName.length < 3) {
//   yourName = prompt(
//     "Previously entered value was incorrect\nEnter your name :"
//   );
// }

// console.log("Correct name ", yourName);

// var secret = Math.floor(Math.random() * 100) + 1;

// while (true) {
//   var guess = parseInt(prompt("Enter a number : ", "1-100"));
//   if (guess > secret) alert("Too High Try Low");
//   else if (guess < secret) alert("Too Low Try High");
//   else {
//     alert(`Congratualtion!, You'e guessed the correct number ${guess}`);
//     break;
//   }
// }

// while (true) {
//   var n = parseInt(prompt("Enter a number : ", "1-100"));
//   if (n > 0) alert(`${n} is positive`);
//   else if (n < 0) alert(`${n} is negative`);
//   else {
//     alert(`Finally ${n}`);
//     break;
//   }
// }

var secret = Math.floor(Math.random() * 100) + 1;
var allowed_attempts = 10;
var attempts = 0;
while (attempts < allowed_attempts) {
  attempts += 1;

  var guess = parseInt(prompt("Enter a number : ", "1-100"));
  if (guess > secret) alert("Too High Try Low");
  else if (guess < secret) alert("Too Low Try High");
  else {
    alert(
      `Congratualtion!, You'e guessed the correct number ${guess} in ${attempts} attempts`
    );
    break;
  }

  alert(`Attempts Left : ${allowed_attempts - attempts}`);
}

if (allowed_attempts - attempts === 0) {
  alert(`Failed to guess the number\n The Secret Number was ${secret}`);
}

// =================== tasks

// Fixed Iteration (For Loop) Tasks

// 1. Print all multiples of 9 between 18 and 90.

// 2. Print a reverse star pattern for 6 rows:
//  ******
//  *****
//  ****
//  ***
//  **
//  *

// 3. Calculate and print the sum of all even numbers from 10 to 60.

// 4. Print the multiplication table for 12 (from 12 x 1 to 12 x 15) in the format: "12 x n = result".

// 5. Print numbers from 1 to 40, skipping multiples of 6.

// 6. Print numbers from 0 to 50 in increments of 5, appending "High" if the number is greater than 25, otherwise "Low".

// 7. Print numbers from 1 to 30, indicating whether each is prime with "Prime" or "Not Prime".

// 8. Print the first 10 triangular numbers (e.g., 1, 3, 6, 10, 15, …).

// String Indexing Tasks

// 9. Count and print the number of uppercase letters in a given string.

// 10. Create a new string from a given string, replacing all consonants (non-vowels, excluding spaces) with '#'.

// 11. Check if the substring "dog" appears in a given string. Print "Dog found" or "No dog".

// 12. Print every third character of a given string (e.g., for "abcdefg", print "a", "d", "g").

// 13. Create a new string from a given string where vowels (a, e, i, o, u) have their case toggled (uppercase to lowercase, lowercase to uppercase).

// 14. Find and print the length of the longest consecutive sequence of non-vowel characters in a given string.

// 15. Check if the first half of a given string matches the reverse of the second half (e.g., "deked"). Print "Mirror" or "Not Mirror".

// While Loop (Fixed and Non-Fixed Iteration) Tasks

// 16. Print the cubes of numbers from 1 to 8 (e.g., 1, 8, 27, ..., 512) using a while loop.

// 17. Count down from 7 to 1 using a while loop, printing "X seconds to go!" for each number, and "Start!" at 0.

// 18. Prompt the user for a username until it is at least 4 characters long and contains no digits. Print "Username accepted".

// 19. Generate a random number between 1 and 25. Allow 6 attempts to guess it with "Too high" or "Too low" hints. Print result and attempts, or reveal number if failed.

// 20. Prompt the user for numbers and sum only the odd ones. Stop when -1 is entered and print the sum.

// 21. Prompt the user for a password until it is at least 8 characters long and contains one uppercase letter. Print "Strong password".

// 22. Prompt the user for numbers until a negative number is entered. Print the count of positive numbers entered.

// Mixed Tasks (Combining Concepts)

// 23. Count and print how many times the letter 'z' (case-sensitive) appears in a given string using a for loop.

// 24. Create a new string from a given string with all 'x' characters removed using a while loop, and print the result.

// 25. Create a new string from a given string where odd-indexed characters are uppercase and even-indexed are lowercase using a for loop.

// 26. Find and print the index of the first consonant (non-vowel letter) in a given string using a while loop. Print "No consonants" if none.

// 27. Given a number n from user input, calculate and print the sum of all multiples of n from 1 to 100 using a for loop.

// 28. Given a number from user input, calculate and print the product of its digits (e.g., for 123, product is 1 × 2 × 3 = 6) using a while loop.
