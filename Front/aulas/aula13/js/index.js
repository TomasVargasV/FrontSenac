const display = document.querySelector(".display-info");

function displayInfo(input) {
  display.value += input;
}
function displayClear() {
  display.value = "";
}

function displayBackspace() {
  let displayInfo = display.value;
  backspace = displayInfo.slice(0, -1);
  display.value = backspace;
}
function calculate() {
  const operation = display.value;
  let operationArr = operation.split("");

  for (let i = 0; i < operationArr.length; i += 1) {
    if (operationArr[i] === "÷") {
      operationArr[i] = "/";
    } else if (operationArr[i] === "×") {
      operationArr[i] = "*";
    }
  }
  display.value = eval(operationArr.join(""));
}
