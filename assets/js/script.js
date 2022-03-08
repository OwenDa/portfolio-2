// FORM HANDLING:
let parameters = document.getElementById('parameters');
let units, maxCapacity, threshold;

// COUNTER CONTROLS:

// Counter Variables
let currentQty = 0;
let count = document.getElementById('count');
let remaining;
let unitDisplay = document.getElementById('unit-display');
let message = document.getElementById('message');

// Identify Buttons etc.
let plusButton = document.getElementById('plus');
let minusButton = document.getElementById('minus');
let resetButton = document.getElementById('reset');

/** Gets user's form input and assigns those values to the appropriate variables.
 */
function onParametersSubmit(event){
    event.preventDefault();
    units = document.getElementById('unit-input').value;
    maxCapacity = parseInt(document.getElementById('max-input').value);
    threshold = parseInt(document.getElementById('threshold-input').value);
    validateInput();
    closeParametersForm();
    unitDisplay.innerHTML = units;
}

/** Warns the user and throws error if the threshold(warning number) entered is greater than
 * their chosen maxCapacity value(maximum number that can be accomodated).
 */
function validateInput() {
    if (threshold > maxCapacity) {
        alert('Houston, we have a problem! The maximum number must be higher than your warning number.');
        throw 'Error: threshold(warning number) must be lower than maxCapacity(maximum number).';
    }
}

/** Closes the modal-container and all contents, revealing the counter,
 * and allows the user to click through the modal to use the counter.
 */
 function closeParametersForm() {
     // modal fades out:
    let container = document.getElementById('modal-container');
    container.style.opacity = 0;
    container.style.pointerEvents = 'none';
    // and is set to display: none
    container.className = 'container-hide';
    // counterContainer becomes visible to screenreaders:
    let counterContainer = document.getElementById('counter-container');
    counterContainer.className = 'container-show';
    // and updates to the currentquantity will be announced:
    counterContainer.ariaLive = 'assertive';
    message.tabIndex = -1;
    message.focus();
}

/** Calculates the number of units until capacity is reached. */
function calculateRemaning() {
    remaining = (maxCapacity - currentQty);
}

/** Increases the currentQty and updates the UI accordingly. */
function incrementCounter() {
    currentQty += 1;
    count.innerHTML = currentQty;
    calculateRemaning();
    selectState();
}

/** Decreases the currentQty and updates the UI accordingly. */
function decrementCounter() {
    if (currentQty <= 0) {
        // Prevents currentQty from entering negative numbers.
        alert('Whoops! Cannot go below 0.');
        throw 'Error: Negative numbers are not permitted. Zero is the lowest permissable number.';
      } else {
    currentQty -= 1;
    count.innerHTML = currentQty;
    calculateRemaning();
    selectState();
      }
}

// STYLE AND UI-CHANGE LOGIC:

/** Determins the current state and applies appropriate case. */
function selectState() {
    if (currentQty >= threshold && currentQty < maxCapacity) {
        updateUI('amber'); // Triggers UI changes when user's threshold(warning number) is reached.
    } else if (currentQty === maxCapacity) {
        updateUI('red'); // Triggers UI changes when user's maxCapacity(maximum number) is reached.
    } else if (currentQty > maxCapacity) {
        updateUI('error'); // Triggers UI changes when currentQty exceeds the user's maxCapacity(maximum numbers).
    } else {
        updateUI('green');
    }
}

/** Defines cases and their respective styles in order to update the UI appropriately. */
function updateUI(stateType) {
    let borderStyle, backgroundColor, textColor, message;

    switch (stateType) {
        case 'green':
            borderStyle = 'none';
            backgroundColor = '#B8EAD1';
            textColor = '#0C343D';
            message = `All good. <br> ${remaining} ${units} remaining until capacity.`;
            break;
        case 'amber':
            borderStyle = 'none';
            backgroundColor = '#FDBA6E';
            textColor = '#0C343D';
            message = `You are nearing capacity. <br> Only ${remaining} remaining.`;
            break;
        case 'red':
            borderStyle = 'none';
            backgroundColor = '#F1B7C4';
            textColor = '#5F071C';
            message = 'You have reached capacity.';
            break;
        case 'error':
            borderStyle =  'medium solid #000000';
            backgroundColor = '#EC8D8D';
            textColor = '#000000';
            message = `You have exceeded the maximum capacity of ${maxCapacity}.`;
            break;
        default:
            break;
    }
    document.getElementById('message').style.border = borderStyle;
    document.body.style.backgroundColor = backgroundColor;
    document.body.style.color = textColor;
    document.getElementById('message').innerHTML = message;
}

/** Confirms the user's intention before reloading the page to start over with new parameters */
function confirmReset() {
    let confirmReset = confirm("Click OK to delete your current settings and start over.");
    if (confirmReset) {
        document.location.reload(true);
    }
}

function initEventListeners() {
    // EVENT LISTENERS:
    parameters.addEventListener('submit', onParametersSubmit);
    plusButton.addEventListener('click', incrementCounter);
    minusButton.addEventListener('click', decrementCounter);
    resetButton.addEventListener('click', confirmReset);
    /* For accessibility, the following ensures that the Enter key will trigger the same event as a click event. Credit for this solution to: https://stackoverflow.com/questions/14542062/eventlistener-enter-key */
    resetButton.addEventListener('keypress', function(e){
        if (e.key === 'Enter') {
            confirmReset();
        }
    })

}

initEventListeners();