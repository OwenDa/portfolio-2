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
let currentQty = 0; // To be set by user; example number for development only.
let int = document.getElementById('count');
let remaining;
let unitDisplay = document.getElementById('unit-display');
let message = document.getElementById('message');
message.innerHTML = "Example message."

let colorScheme; // Test variable.

// Identify Buttons
let plusButton = document.getElementById('plus');
let minusButton = document.getElementById('minus');

function calculateRemaning() {
    remaining = (maxCapacity - currentQty);
}

/** Increases the currentQty and updates the count accordingly */
function increase() {
    currentQty += 1;
    int.innerHTML = currentQty;
    calculateRemaning();
}

/** Decreases the currentQty and updates the count accordingly */
function decrease() {
    currentQty -= 1;
    int.innerHTML = currentQty;
    calculateRemaning();
}

// Style change logic:
if (currentQty >= threshold && currentQty < maxCapacity) {
    colorScheme = "amber";
    message = "You are nearning capacity.";
} else if (currentQty === maxCapacity) {
    colorScheme = "red";
    message = "You have reached capacity.";
} else if (currentQty > maxCapacity) {
    colorScheme = "red-red";
    message = "You have exceeded capacity."
} else {
    colorScheme = "Default green";
    message = "All good.";
}

// EVENT LISTENERS
plusButton.addEventListener('click', increase);
minusButton.addEventListener('click', decrease);

// FOR TESTING/DEVELOPMENT:
console.log(colorScheme);
console.log(message);