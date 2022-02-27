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
let colorScheme; // test variable

// Identify Buttons
let plusButton = document.getElementById('plus');
let minusButton = document.getElementById('minus');

/** Calculates the number of units until capacity is reached */
function calculateRemaning() {
    remaining = (maxCapacity - currentQty);
}

/** Increases the currentQty and updates the UI accordingly */
function increase() {
    currentQty += 1;
    int.innerHTML = currentQty;
    calculateRemaning();
    updateUI();
}

/** Decreases the currentQty and updates the UI accordingly */
function decrease() {
    currentQty -= 1;
    int.innerHTML = currentQty;
    calculateRemaning();
    updateUI();
}

// Style change logic:
function updateUI() {
    if (Number.isNaN(remaining)) {
        message.innerHTML = "";
    } else if (currentQty >= threshold && currentQty < maxCapacity) {
        colorScheme = "amber";
        document.body.style.backgroundColor = "#FDBA6E";
        document.body.style.color = "#0C343D";
        message.innerHTML = "You are nearing capacity.";
    } else if (currentQty === maxCapacity) {
        colorScheme = "red";
        document.body.style.backgroundColor = "#F1B7C4";
        document.body.style.color = "#5F071C";
        message.innerHTML = "You have reached capacity.";
    } else if (currentQty > maxCapacity) {
        colorScheme = "red-red";
        document.body.style.backgroundColor = "#EC8D8D";
        document.body.style.color = "#000000";
        message.innerHTML = "You have exceeded capacity."
    } else {
        colorScheme = "Default green";
        document.body.style.backgroundColor = "#B8EAD1";
        document.body.style.color = "#0C343D";
        message.innerHTML = "All good.";
    }
    // FOR TESTING/DEVELOPMENT:
    console.log(colorScheme);
    console.log(message);
}

// EVENT LISTENERS
plusButton.addEventListener('click', increase);
minusButton.addEventListener('click', decrease);

