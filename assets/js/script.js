// Test element identification (count, units, message):
let currentQty = 90;
let int = document.getElementById('count');
int.innerHTML = currentQty;

let units = document.getElementById('units');
units.innerHTML = "examples";

let message = document.getElementById('message');
message.textContent = "Example message here."