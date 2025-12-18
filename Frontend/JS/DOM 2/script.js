let division = document.querySelector("#box");
console.log(division);

let identity = division.getAttribute('id');
console.log(identity);

let paragraph = document.querySelector('p');;
console.log(paragraph);
console.log(paragraph.setAttribute('class', 'new-class'));

division.style.backgroundColor = 'rgba(16, 147, 223, 1)';
division.style.fontSize = '20px';
division.style.textAlign = 'center';
division.innerText = "This is a box";

let newBtn = document.createElement('button');
newBtn.innerText = "Click Me";
division.after(newBtn);

let newElement = document.createElement('h1');
newElement.innerHTML = "<i>Hello World</i>";
division.before(newElement);

newElement.remove();        // deletes the h1

// outerHTML returns the inner and outer HTML of an element
