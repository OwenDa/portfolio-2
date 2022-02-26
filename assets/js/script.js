// FORM HANDLILNG
let parameters = document.getElementById('parameters');
parameters.addEventListener('submit', setParameters);

/** Gets user's form input and assigns those values to the appropriate variables.
 */
function setParameters(event){
    event.preventDefault();
    let unitInput = document.getElementById('unit-input').value;
    unitDisplay.innerHTML = unitInput;
    maxCapacity = parseInt(document.getElementById('max-input').value);
    threshold = parseInt(document.getElementById('threshold-input').value);
    // For testing:
    console.log(unitDisplay);
    console.log(maxCapacity);
    console.log(threshold);
}

// Counter Variables
let currentQty = 90;
let int = document.getElementById('count');
int.innerHTML = currentQty;

let unitDisplay = document.getElementById('unit-display');
units.innerHTML = "examples";

let message = document.getElementById('message');
message.textContent = "Example message here."

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