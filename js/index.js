let input = document.getElementById("inputText");
let button = document.getElementById("buttonText");


button.addEventListener("click", function() {

    let inputValue = input.value;

    localStorage.setItem("input", inputValue);

});
