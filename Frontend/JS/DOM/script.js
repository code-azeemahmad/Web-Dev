console.dir(document.body);

let heading = document.getElementById("heading"); // returns Element  // returns null if not found
console.dir(heading);

let haed = document.getElementsByClassName("haed"); // returns HTMLCollection (very similar to array)   // returns empty HTMLCollection if not found
console.dir(haed);

let pTags = document.getElementsByTagName("p"); // returns HTMLCollection   // returns empty HTMLCollection if not found
console.dir(pTags);

let firstPTag = document.querySelector("p"); // returns Element   // returns null if not found
console.dir(firstPTag);

let allPTags = document.querySelectorAll("p"); // returns NodeList (very similar to array)   // returns empty NodeList if not found
console.dir(allPTags);

let fruit = document.querySelector(".fruit");
console.log(fruit.innerText);      // gets the text content of the element
console.log(fruit.innerHTML);      // gets the HTML content of the element

let old = document.getElementById("old");
old.innerHTML = "<i>mew heading</i>"
old.innerText;       // ""
old.textContent;     // "mew heading"

