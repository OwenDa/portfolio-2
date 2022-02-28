// FORM HANDLING:
let parameters = document.getElementById('parameters');
parameters.addEventListener('submit', setParameters);
let units;
let maxCapacity;
let threshold;

/** Gets user's form input and assigns those values to the appropriate variables.
 */
function setParameters(event){
    event.preventDefault();
    units = document.getElementById('unit-input').value;
    unitDisplay.innerHTML = units;
    maxCapacity = parseInt(document.getElementById('max-input').value);
    threshold = parseInt(document.getElementById('threshold-input').value);
    checkInput();
    closeModal();
}

/** Warns the user and throws error if the threshold(warning number) entered is greater than
 * their chosen maxCapacity value(maximum number that can be accomodated).
 */
function checkInput() {
    if (threshold > maxCapacity) {
        alert('Houston, we have a problem! The maximum number must be higher than your warning number.');
        throw 'Error: threshold(warning number) must be lower than maxCapacity(maximum number).';
    }
}

/** Closes the modal-container and all contents, revealing the counter,
 * and allows the user to click through the modal to use the counter.
 */
 function closeModal() {
    let container = document.getElementById('modal-container');
    container.style.opacity = 0;
    container.style.pointerEvents = 'none';
}

// COUNTER CONTROLS:

// Counter Variables
let currentQty = 0;
let int = document.getElementById('count');
let remaining;
let unitDisplay = document.getElementById('unit-display');
let message = document.getElementById('message');

// Identify Buttons
let plusButton = document.getElementById('plus');
let minusButton = document.getElementById('minus');

/** Calculates the number of units until capacity is reached. */
function calculateRemaning() {
    remaining = (maxCapacity - currentQty);
}

/** Increases the currentQty and updates the UI accordingly. */
function increase() {
    currentQty += 1;
    int.innerHTML = currentQty;
    calculateRemaning();
    updateUI();
}

/** Decreases the currentQty and updates the UI accordingly. */
function decrease() {
    if (currentQty <= 0) {
        // Prevents currentQty from entering negative numbers.
        alert('Whoops! Cannot go below 0.');
        throw 'Error: Negative numbers are not permitted. Zero is the lowest permissable number.';
      } else {
    currentQty -= 1;
    int.innerHTML = currentQty;
    calculateRemaning();
    updateUI();
      }
}

// STYLE AND UI-CHANGE LOGIC:

/** Checks current state and applies appropriate UI changes. */
function updateUI() {
    if (Number.isNaN(remaining)) {
        message.innerHTML = ""; // Ensures "message" is empty in initial state.
    } else if (currentQty >= threshold && currentQty < maxCapacity) {
        amberState(); // Triggers UI changes when user's threshold(warning number) is reached.
    } else if (currentQty === maxCapacity) {
        redState(); // Triggers UI changes when user's maxCapacity(maximum number) is reached.
    } else if (currentQty > maxCapacity) {
        overCapacityState(); // Triggers UI changes when currentQty exceeds the user's maxCapacity(maximum numbers).
    } else {
        greenState();
    }
}

// POSSIBLE STATES:

/** Defines amberState for use in updateUI function (triggered when threshold is reached). */
function amberState() {
    document.body.style.backgroundColor = "#FDBA6E";
    document.body.style.color = "#0C343D";
    message.innerHTML = `You are nearing capacity. <br> Only ${remaining} remaining.`;
}

/** Defines redState for use in updateUI function (trigged when maxCapacity is reached). */
function redState() {
    document.getElementById('message').style.border = "none";
    document.body.style.backgroundColor = "#F1B7C4";
    document.body.style.color = "#5F071C";
    message.innerHTML = "You have reached capacity.";
}

/** Defines overCapacityState for use in updateUI function (triggered when maxCapacity is exceeded). */
function overCapacityState() {
    document.getElementById('message').style.border = "medium solid #000000";
    document.body.style.backgroundColor = "#EC8D8D";
    document.body.style.color = "#000000";
    message.innerHTML = `You have exceeded the maximum capacity of ${maxCapacity}.`;
}

/** Defines greenState for use in updateUI function (default state). */
function greenState() {
    document.getElementById('message').style.border = "none";
    document.body.style.backgroundColor = "#B8EAD1";
    document.body.style.color = "#0C343D";
    message.innerHTML = `All good. <br> ${remaining} ${units} remaining until capacity.`;
}

// EVENT LISTENERS:
plusButton.addEventListener('click', increase);
minusButton.addEventListener('click', decrease);