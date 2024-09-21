let inputValue = localStorage.getItem("input");

if (inputValue) {
    document.getElementById("data").textContent = inputValue;
} else {
    document.getElementById(inputValue).textContent = "No hay datos almacenados." ;
};