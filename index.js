//Calculator Program
const display = document.getElementById("display");

function appendToDisplay(input) {
  //
  // ReadOnly input display anyways
  //
  /* const validInputs = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "+",
    "-",
    "*",
    "/",
    ".",
  ];
  if (!validInputs.includes(input)) {
    console.error("Invalid input:", input);
    return;
  }
    */

  //
  // Check if the input is at maximum length
  //
  /*
  const maxLength = 10; // Maximum length of the display
  if (
    display.value.length >= maxLength &&
    !["+", "-", "*", "/"].includes(input)
  ) {
    console.error("Display limit reached");
    return;
  }
    */
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
function backSpace() {
  display.value = display.value.slice(0, -1);
}
