# Window Object
### The window object represents an open window in a browser. It is browser's object (not JavaScript's) & is automatically created by browser.
### It is a global object with lots of properties & methods.
`window.console.log("hello world");`
# DOM
### When a web page is loaded, the browser creates a Document Object Model (DOM) of the page
`window.document`
`console.dir(document);`
### DOM is to access html code in javascript code
```
console.dir(document);  // to print the properties and methods of objects (document) in console
console.log(document);      // print the object as element in console
console.log(document.body);
console.dir(document.body);
document.body.childNodes[3].innerHTML = "This is modified paragraph using JS";
```
### when we load js scipt before body, the dom elements are not accessible and console.dir(document.body) prints null object.
## Selecting with id
`document.getElementById("myId")`
## Selecting with class
`document.getElementsByCIassName("myClass")`
## Selecting with tag
`document.getElementsByTagName("p")`

# Query Selector
```
document.querySeIector("myId I myCIass I tag")
// returns first element
document.querySelectorAII("myId I myCIass I tag")
// returns a NodeList
```
# Properties
for get, set
    • tagName : returns tag for element nodes
    • innerText : returns the text content of the element and all its children
    • innerHTML : returns the plain text or HTML contents in the element
    • textContent : returns textual content even for hidden elements