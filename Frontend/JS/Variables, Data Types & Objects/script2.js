// Creating Symbols
let s1 = Symbol("id");
let s2 = Symbol("id");

console.log(s1 === s2); // false (each symbol is unique)

// Using Symbol as a Hidden Object Property
let userId = Symbol("userId");
let user = {
  name: "Azeem",
  age: 21,
  [userId]: 12345
};
console.log(user[userId]); // 12345

// Because the key is hidden — nobody can accidentally overwrite or access it using normal loops.
console.log(Object.keys(user)); // ["name", "age"]
console.log(JSON.stringify(user)); // {"name":"Azeem","age":21}


// Normal numbers in JS can store only up to: [2^53 - 1  // 9007199254740991]; Beyond that, precision is lost.

// Creating BigInt: Using n at the end
let big = 900719925474099123456789n;
console.log(big);

let x = 30000000000000000n;
let y = 20000000000000000n;

console.log(x + y); // 30000000000000000n
console.log(x * y); // huge BigInt

let x1 = 10n;
let y1 = 5;

console.log(x1 + BigInt(y1));


