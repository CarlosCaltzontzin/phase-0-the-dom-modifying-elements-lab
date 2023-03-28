// Write your code here!
const element = document.getElementById("main");
element.remove();

const newHeader = document.createElement("h1");

newHeader.setAttribute("id","victory");

newHeader.textContent = "Carlos is the champion";