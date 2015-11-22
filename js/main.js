// Building a Calculator

// Variables
// ------------------------------------------------------

var inputString = "";
var result = 0;
var display = document.getElementById("display");



// Math Functions
// -------------------------------------------------------

function add(a, b) {
  return (a + b);
}

function multiply(a, b) {
  return (a * b);
}

function subtract(a, b) {
  return (a - b);
}

function divide(a, b) {
  return (a / b);
}


function calculateStuff(calcInput) {

  var inputArray = calcInput.split(/\+|-|\*|\//);
  var num1 = parseInt(inputArray[0]);
  var operation = calcInput.match(/\+|-|\*|\//);
  var num2 = parseInt(inputArray[1]);

  switch (operation[0]) {
    case "+":
      result = add(num1, num2);
      break;
    case "-":
      result = subtract(num1, num2);
      break;
    case "*":
      result = multiply(num1, num2);
      break;
    case "/":
      result = divide(num1, num2);
      break;
    case null:
      console.log("do nothing");
      break;
    default:
		  console.log("something isn't going right!");
  }
  display.innerHTML = result;
}

function displayButtonInput(buttonInput) {
  display.innerHTML += buttonInput;
}



// EVENTS //
// ------------------------------------------------------------------

// Seperate events for:
  // number btns
  // mathmatical operators
  // equal sign btn
  // and cancel btn

// Get buttons and add to input string when clicked
var btnNumber = document.getElementsByClassName("btn-number");
for (var i = 0; i < btnNumber.length; i++) {
  btnNumber[i].addEventListener("click", function() {
    if (inputString === "=") {
      display.innerHTML = "";
      inputString = (this.innerHTML);
      displayButtonInput(this.innerHTML);
    } else {
      inputString += (this.innerHTML);
      displayButtonInput(this.innerHTML);
    }
  });
}

var btnOperator = document.getElementsByClassName("btn-operator");
for (var i = 0; i < btnOperator.length; i++) {
  btnOperator[i].addEventListener("click", function() {
    inputString += (this.innerHTML);
    displayButtonInput(this.innerHTML);
  });
}

var btnEquals = document.getElementById("btn-equals");
btnEquals.addEventListener("click", function() {
  calculateStuff(inputString);
  inputString = "=";
});

var btnCancel = document.getElementById("btn-cancel");
btnCancel.addEventListener("click", function() {
  inputString = "";
  display.innerHTML = "";
});


// Bugs / Features
// ----------------------------------------------------------

// Equals buttons should reset variables for next calculation
// Add equation
// Fix for loop to add event listners
