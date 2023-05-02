// Selektieren des Anzeigefelds und der Schaltflächen
const display = document.querySelector(".display");
const clearBtn = document.querySelector(".clear-btn");
const equalsBtn = document.querySelector(".equals-btn");
const dotBtn = document.querySelector(".dot");
const operatorBtns = document.querySelectorAll(".operator");
const numberBtns = document.querySelectorAll(".number");

// Hinzufügen von Event-Listenern für die Schaltflächen
clearBtn.addEventListener("click", clearDisplay);
equalsBtn.addEventListener("click", evaluate);
dotBtn.addEventListener("click", appendDot);

operatorBtns.forEach((operator) => {
  operator.addEventListener("click", () => {
    appendOperator(operator.textContent);
  });
});

numberBtns.forEach((number) => {
  number.addEventListener("click", () => {
    appendNumber(number.textContent);
  });
});

// Variable, um zu speichern, ob der Equals-Button zuletzt gedrückt wurde
let equalsPressed = false;

// Funktion zum Anzeigen des Ergebnisses
function evaluate() {
  try {
    display.textContent = eval(display.textContent);
  } catch (error) {
    display.textContent = "Falsche Eingabe";
  }
  
  equalsPressed = true; // Setzen der equalsPressed-Variable auf true
}

// Funktion zum Löschen des Anzeigefelds
function clearDisplay() {
  display.textContent = "0";
  equalsPressed = false; // Zurücksetzen der equalsPressed-Variable
}

// Funktion zum Anhängen von Zahlen an das Anzeigefeld
function appendNumber(number) {
  if (equalsPressed) {
    display.textContent = number;
    equalsPressed = false;
  } else {
    if (display.textContent === "0") {
      display.textContent = number;
    } else {
      display.textContent += number;
    }
  }
}

// Funktion zum Anhängen vom Dezimalpunkt
function appendDot() {
  if (display.textContent.includes(".")) {
    return;
  }
  display.textContent += ".";
}

// Funktion zum Anhängen von Operatoren an das Anzeigefeld
function appendOperator(operator) {
  const lastChar = display.textContent.slice(-1);
  if (
    lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === "/" || lastChar === "."
  ) {
    display.textContent = display.textContent.slice(0, -1) + operator;
  } else {
    display.textContent += operator;
  }
  equalsPressed = false; // Zurücksetzen der equalsPressed-Variable
  
}