function getValueFromInput(id) {
  const input = document.getElementById(id);
  const value = input.value;
  input.value = "";
  return value;
}

function getBalance() {
  const balanceElement = document.getElementById("balance");
  const balance = balanceElement.innerText;
  return Number(balance);
}
function setBalance(value) {
  const balanceElement = document.getElementById("balance");
  balanceElement.innerText = value;
}

// section show and hidden machine logic

function showOnly(id) {
  const addMoney = document.getElementById("add-money");
  const cashOut = document.getElementById("cash-out");
  const transferMoney = document.getElementById("transfer-money");
  const payBill = document.getElementById("pay-bill");

  addMoney.classList.add("hidden");
  cashOut.classList.add("hidden");
  transferMoney.classList.add("hidden");
  payBill.classList.add("hidden");

  const selected = document.getElementById(id);
  selected.classList.remove("hidden");
}
