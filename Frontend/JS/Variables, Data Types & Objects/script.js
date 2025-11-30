// alert("Hello World!");

console.log("Hello World!");

let a = 3;
let b = 4;

console.log(a + b);

let c = "Azeem";

console.log(c);

console.log(typeof a, typeof b, typeof c);

// Variable name must begin with a letter, _ or $
// don't start with a number
// case sensitive
// Camel case

// var is globally scoped, let and const are block scoped

const a1 = 6;
// a1++;        X

let d = 5;      // modern js use let
{
    let d = 10;
    console.log(d);
}
console.log(d);

// 7 primitive data types
let nickName = "Azeem";       // string
let age = 21;                 // number
let gpa = 3.87                // number
let isHostellite = false;     // boolean
let salary;                   // undefined
let talent = null;            // NULL

console.log(nickName, age, gpa, isHostellite, salary, talent);
console.log(typeof nickName, typeof age, typeof gpa, typeof isHostellite, typeof salary, typeof talent);

/*  why the typeof NULL is object?
When JavaScript was created in 1995, values were stored in memory with “type tags”.
Objects got a type tag of 0
null was represented by a NULL pointer, which also had the value 0
So JavaScript mistakenly thought
0 → must be an object
This became a bug in the language, but it could NOT be fixed.
Fixing it would break millions of websites. So JavaScript kept this behavior forever.
*/

console.log(typeof function() {});  // "function"

let arr = ["a", "b"];
console.log(typeof arr); // object

/*
| Feature      | `null`                     | `undefined`                        |
| ------------ | -------------------------- | ---------------------------------- |
| Meaning      | Intentional empty value    | Variable declared but not assigned |
| Who sets it? | You (the programmer)       | JavaScript automatically           |
| Type         | `"object"` (bug)           | `"undefined"`                      |
| Use case     | “There is *nothing* here.” | “Value is *not assigned yet*.”     |
*/

console.log(typeof NaN); // number
// This happens when a math operation fails:    Even though it means “invalid”, it is still stored as a number type internally.

// NaN is the only value NOT equal to itself, NaN === NaN; // false

// String + number = string concatenation.  5 + "5" = "55"
// string - number = numeric conversion.    "5" - 5 = 0

// true == 1 // true    // false == 0 // true

// typeof Infinity → "number"

// typeof null === "object" but null instanceof Object → false



