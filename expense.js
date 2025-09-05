let total = 0;

function addExpense() {
  const item = document.getElementById("itemInput").value;
  const amount = parseFloat(document.getElementById("amountInput").value);

  if (!item || isNaN(amount)) return;

  const li = document.createElement("li");
  li.textContent = `${item} - ₹${amount}`;

  document.getElementById("expenseList").appendChild(li);

  total += amount;
  document.getElementById("total").textContent = total;

  document.getElementById("itemInput").value = "";
  document.getElementById("amountInput").value = "";
}
