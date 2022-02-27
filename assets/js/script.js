// FORM HANDLILNG
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
}

// Validity & Checks (notes):
// Done: Threshold (warning number) cannot be greater than maxCapacity (maximum number).
// Done: Counter will not go below 0 (as negative quantities would be illogical and lead to error in most settings).

/** Warns the user and throws error if the threshold(warning number) entered is greater than
 * their chosen maxCapacity value(maximum number that can be accomodated).
 */
function checkInput() {
    if (threshold > maxCapacity) {
        alert('Houston, we have a problem! The maximum number must be higher than your warning number.');
        throw 'Error: threshold(warning number) must be lower than maxCapacity(maximum number).';
    }
}

// Counter Variables
let currentQty = 0;
let int = document.getElementById('count');
let remaining;
let unitDisplay = document.getElementById('unit-display');
let message = document.getElementById('message');
let colorScheme; // test variable

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
        alert('Whoops! Cannot go below 0.');
        throw 'Error: Negative numbers are not permitted. Zero is the lowest permissable number.';
      } else {
    currentQty -= 1;
    int.innerHTML = currentQty;
    calculateRemaning();
    updateUI();
      }
}

/** Checks current state and applies appropriate UI changes. */
function updateUI() {
    if (Number.isNaN(remaining)) {
        message.innerHTML = ""; // Ensures "message" is empty in initial state.
    } else if (currentQty >= threshold && currentQty < maxCapacity) {
        document.body.style.backgroundColor = "#FDBA6E";
        document.body.style.color = "#0C343D";
        message.innerHTML = `You are nearing capacity. Only ${remaining} remaining.`;
    } else if (currentQty === maxCapacity) {
        document.body.style.backgroundColor = "#F1B7C4";
        document.body.style.color = "#5F071C";
        message.innerHTML = "You have reached capacity.";
    } else if (currentQty > maxCapacity) {
        document.body.style.backgroundColor = "#EC8D8D";
        document.body.style.color = "#000000";
        message.innerHTML = `You have exceeded the maximum capacity of ${maxCapacity}.`
    } else {
        document.body.style.backgroundColor = "#B8EAD1";
        document.body.style.color = "#0C343D";
        message.innerHTML = `All good. ${remaining} ${units} remaining until capacity.`;
    }
    // FOR TESTING/DEVELOPMENT:
    console.log(colorScheme);
    console.log(message);
}

// EVENT LISTENERS
plusButton.addEventListener('click', increase);
minusButton.addEventListener('click', decrease);

