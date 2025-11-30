const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
const priceElement=document.querySelector('.price');
	let total=0;

	priceElement.forEach(price=>{
		total += Number(price.textContent);
	});

	let newCell = document.createElement("tr");
   newRow.className = "total-row";

	let newCell = document.createElement("td");
	newCell.colSpan=2;
	newcell.textContent = "Total Price:"+ total;
	newRow.appendChild(newCell);
};

getSumBtn.addEventListener("click", getSum);

