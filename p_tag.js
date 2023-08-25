const textbox = document.getElementById("textbox");
const addButton = document.getElementById("addButton");
const output = document.getElementById("output");

addButton.addEventListener("click", function() {
  const text = textbox.value;
  output.innerHTML += "<p>" + text + "</p>";
});