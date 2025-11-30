// ✔ Only primitive values are immutable
// ✔ Non-primitive values (objects, arrays, functions) are mutable

let obj = { a: 1 };
let copy = obj;

copy.a = 99;

console.log(obj.a); // 99 (because both reference same object)

// ✔ Non-primitive values are stored by reference, not value.

let o = {
    Name: "Azeem",
    age: 21,
    isWealthy: false
};

console.log(o.Name);
console.log(o.age);
console.log(o.isWealthy);

o.age = 20;

console.log(o.age);

// Everything that is not a primitive is an object in JavaScript.

/*
| Non-Primitive Type    | Meaning                  |
| --------------------- | ------------------------ |
| **Object**            | Key-value collection     |
| **Array**             | Ordered list (object)    |
| **Function**          | Executable object        |
| **Date**              | Date/time object         |
| **RegExp**            | Pattern matching         |
| **Map**               | Flexible key-value store |
| **Set**               | Unique value store       |
| **WeakMap / WeakSet** | Memory-safe collections  |
| **Class Instances**   | Custom objects           |

*/
