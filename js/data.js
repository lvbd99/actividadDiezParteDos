let input = document.getElementById("inputText");
let inputValue = document.getElementById("inputText").value;
let button = document.getElementById("buttonText");

if (inputValue) {
    document.getElementById("data").textContent = inputValue;
} else {
    document.getElementById(inputValue).textContent = "No hay datos almacenados." ;
}