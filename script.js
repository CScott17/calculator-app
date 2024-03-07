const display = document.getElementById("display");
const darkModeToggle = document.getElementById("darkModeToggle");
function appendToDisplay(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

document.addEventListener("keydown", function (event) {
  const key = event.key;

  if (
    (key >= "0" && key <= "9") ||
    key === "+" ||
    key === "-" ||
    key === "*" ||
    key === "/"
  ) {
    appendToDisplay(key);
  } else if (key === "Enter") {
    calculate();
  } else if (key === "Backspace") {
    clearDisplay();
  }
});

darkModeToggle.addEventListener("click", toggleDarkMode);
