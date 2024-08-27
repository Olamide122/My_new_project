let currentDisplay = "0";
let resultDisplay=false;

function appendToDisplay(value) {
  if (currentDisplay === "0" || resultDisplay) {
    currentDisplay = value;
  } else {
    currentDisplay += value;
  }
  resultDisplay=false;
  updateDisplay();
}

function updateDisplay() {
  const displayElement = document.getElementById("calculator-display");
  displayElement.textContent = currentDisplay;
}
// function updateAnswer() {
//     document.getElementById("final-result").innerHTML = currentDisplay;
// }



function calculateResult() {

    try {
     const result = eval(currentDisplay);
    currentDisplay = result.toString();
    updateDisplay()
    // updateAnswer();
  } catch (error) {
    currentDisplay += "\nError";
    update();
  }
  resultDisplay=true;
}

function clearLastElement() {
  currentDisplay = currentDisplay.slice(0, -1);
  if (currentDisplay === "") {
    currentDisplay = "";
  }
  updateDisplay();
}

function clearDisplay() {
  currentDisplay = "";
  updateDisplay();
  updateAnswer();

}

// Attach handleOverflow to window resize event
// window.addEventListener("resize", handleOverflow);

// Call handleOverflow initially to handle any overflow on page load
// handleOverflow();