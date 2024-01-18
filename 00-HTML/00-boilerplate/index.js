// Creating the main element
const main = document.createElement("main");

// Adding the main the body element
document.body.appendChild(main);

// Selecting the main element
const mainElement = document.querySelector("main");

// Set the class and id
mainElement.className = "main-container";
mainElement.id = "main";

// Set the CSS properties
mainElement.style.width = "200px";
mainElement.style.height = "200px";
mainElement.style.backgroundColor = "orange";

// Displaying the main element in the console
console.log("main ->", mainElement);
