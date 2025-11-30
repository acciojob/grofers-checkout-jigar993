const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
// Step 1: Select all price elements
const priceElements = document.querySelectorAll('.prices');

// Step 2: Calculate the total price
let totalPrice = 0;
priceElements.forEach(priceElement => {
    // Convert the price text to a number (remove any currency symbols if necessary)
    const price = parseFloat(priceElement.textContent);
    totalPrice += price;
});

// Step 3: Create a new row and cell for the total price
const table = document.querySelector('table'); // Assuming there's only one table
const newRow = document.createElement('tr');
const newCell = document.createElement('td');

// Step 4: Set the total price and append the cell and row to the table
newCell.textContent = `Total Price: $${totalPrice.toFixed(2)}`; // Format as needed
newRow.appendChild(newCell);
table.appendChild(newRow);
};

getSumBtn.addEventListener("click", getSum);

