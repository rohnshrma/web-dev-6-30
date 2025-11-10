//  arithmetic operators

var a = 23;
var b = 2;

console.log(a + b); //  sum
console.log(a - b); //  difference
console.log(a * b); //  product
console.log(a / b); //  divisible (quotient)
console.log(a % b); //  divisible (remainder)
console.log(a ** b); // exponential (power)

// assignment operators

var x = 34; // regular assignment
console.log(x);
x += 10; // add and assign
console.log(x);
x -= 10; // subtract and assign
console.log(x);
x *= 10; // multiply and assign
console.log(x);
x /= 10; // divide(quotient) and assign
console.log(x);
x %= 10; // divide(reminder) and assign
console.log(x);
x **= 10; // exponential and assign
console.log(x);

// comparison operators

// equals to (compares value)

console.log(12 == 12);
console.log(12 == "12");

// strict equals to (compares value and data type)

console.log(12 === 12);
console.log(12 === "12");

// not equals to (compares value)

console.log(12 != 2);
console.log(12 != "12");

// strict not equals to (compares value and data type)

console.log(12 !== 12);
console.log(12 !== "12");

// greater than
console.log(12 > 10);
// lesser than
console.log(12 < 10);
// greater  than or equals to
console.log(12 >= 10);
// lesser than or equals to
console.log(12 <= 10);

// logical operators

// and , or , not

// and (&&)
// expects all the conditions to be true to give a truthy answer

console.log(12 > 10 && 10 < 12); // t && t = t
console.log(12 < 10 && 10 < 12); // f && t = f
console.log(12 < 10 && 10 > 12); // f && f = f

// or (||)
// expects atleast one of the conditions to be true to give a truthy answer

console.log(12 > 10 || 10 < 12); // t || t = t
console.log(12 < 10 || 10 < 12); // f || t = t
console.log(12 < 10 || 10 > 12); // f || f = f

// not (!)
// reverse boolean outcome

console.log(true);
console.log(12 > 10);
console.log(!true);
console.log(!2 > 10);
