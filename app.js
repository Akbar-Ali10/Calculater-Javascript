
const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
const clearButton = document.getElementById("clear");
const equalsButton = document.getElementById("equals");

buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        display.value += button.getAttribute("data-value");
    });
});

clearButton.addEventListener("click", function() {
    display.value=" ";
});

equalsButton.addEventListener("click", function() {
    display.value = eval(display.value);
});


