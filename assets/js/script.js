// FORM HANDLILNG
let parameters = document.getElementById('parameters');
parameters.addEventListener('submit', setParameters);
let unitInput;
let maxCapacity;
let threshold;

/** Gets user's form input and assigns those values to the appropriate variables.
 */
function setParameters(event){
    event.preventDefault();
    unitInput = document.getElementById('unit-input').value;
    unitDisplay.innerHTML = unitInput;
    maxCapacity = parseInt(document.getElementById('max-input').value);
    threshold = parseInt(document.getElementById('threshold-input').value);
}

// Counter Variables
let currentQty = 90; // To be set by user; example number for development only.
let int = document.getElementById('count');
let unitDisplay = document.getElementById('unit-display');
let message = document.getElementById('message');
message.innerHTML = "Example message."

// Identify Buttons
let plusButton = document.getElementById('plus');
let minusButton = document.getElementById('minus');

/** Increases the currentQty and updates the count accordingly */
function increase() {
    currentQty += 1;
    int.innerHTML = currentQty;
}

/** Decreases the currentQty and updates the count accordingly */
function decrease() {
    currentQty -= 1;
    int.innerHTML = currentQty;
}


// EVENT LISTENERS
plusButton.addEventListener('click', increase);
minusButton.addEventListener('click', decrease);