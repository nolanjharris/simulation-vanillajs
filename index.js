let expenseAmounts = document.getElementsByClassName('expenseAmount');
let expenses = document.querySelector('#expenses');
let totalsArray = [];
let total = 0;

let displayTotal = document.getElementById('displayTotal');

for (let i = 0; i < expenseAmounts.length; i++) {
    totalsArray.push(expenseAmounts[i].innerText);
}

total = totalsArray.reduce((a, c) => {
    return a * 1 + c * 1;
});

displayTotal.innerText = total;
console.log(total);


let nameInput = document.querySelector('#nameInput');
let amountInput = document.querySelector('#amountInput');
let addButton = document.querySelector('#addButton');

addButton.addEventListener('click', function (event) {
    let name = nameInput.value;
    let amount = amountInput.value;

    total += (amount * 1);
    displayTotal.innerText = total;

    let expenseItemDiv = document.createElement('div');
    expenseItemDiv.className = 'expenseItem';

    let namePriceDiv = document.createElement('div');
    namePriceDiv.className = 'namePrice';

    let expenseName = document.createElement('h5');
    expenseName.innerText = name;

    let expenseAmount = document.createElement('h6');
    expenseAmount.innerText = `$${amount}`;

    let expenseAmountSpan = document.createElement('span');
    expenseAmount.className = 'expenseAmount';

    let trashIcon = document.createElement('img');
    trashIcon.setAttribute('src', 'assets/trash_can.svg');
    trashIcon.className = "trashCan";

    expenses.appendChild(expenseItemDiv);
    expenseItemDiv.appendChild(namePriceDiv);
    namePriceDiv.appendChild(expenseName);
    namePriceDiv.appendChild(expenseAmount);
    expenseAmount.appendChild(expenseAmountSpan);
    expenseItemDiv.appendChild(trashIcon);

    trashIcon.addEventListener('click', deleteItem);
    nameInput.value = "";
    amountInput.value = "";
})

let trashDelete = document.querySelectorAll('.trashCan');
console.log(trashDelete[0])

function deleteItem(item) {
    item.target.parentNode.remove();
    let expenseAmounts = document.getElementsByClassName('expenseAmount');
    let totalsArray = [];
    for (let i = 0; i < expenseAmounts.length; i++) {
        totalsArray.push(expenseAmounts[i].innerText);
    }
    if (totalsArray.length > 0) {
        total = totalsArray.reduce((a, c) => {
            return a * 1 + c * 1;
        });
    } else {
        total = 0;
    }
    displayTotal.innerText = total;
    console.log(total)
}

Array.from(trashDelete, a => a.addEventListener('click', deleteItem));