let input = document.getElementById("inputText");
let inputValue = document.getElementById("inputText").value;
let button = document.getElementById("buttonText");


button.addEventListener("click", function() {

localStorage.setItem("input", inputValue);

})
