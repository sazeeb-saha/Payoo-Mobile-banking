document.getElementById("cashout-btn").addEventListener("click", function () {
  const agentNumber = getValueFromInput("agent-number");
  if (agentNumber.length != 11) {
    alert("Invalid Agent Number. Pls Enter 11 Digit Agent Number");
    return;
  }

  const cashOutAmount = getValueFromInput("cashout-amount");

  const currentBalance = getBalance();

  const newBalance = currentBalance - Number(cashOutAmount);

  if (newBalance < 0) {
    alert("insufficient Balance");
    return;
  }

  const cashOutPin = getValueFromInput("cashout-pin");
  if (cashOutPin === "1234") {
    alert("Cash-Out Successful");
    setBalance(newBalance);
  } else {
    alert("Invalid Pin. Try Again!");
    return;
  }
});

// document.getElementById("cashout-btn").addEventListener("click", function () {
//   const agentNumberInput = document.getElementById("agent-number");
//   const agentNumber = agentNumberInput.value;
//   if (agentNumber.length != 11) {
//     alert("Invalid Agent Number. Pls Enter 11 Digit Agent Number");
//     return;
//   }

//   const amountInput = document.getElementById("cashout-amount");
//   const cashOutAmount = amountInput.value;

//   const haveBalance = document.getElementById("balance");
//   const currentBalance = haveBalance.innerText;

//   const newBalance = Number(currentBalance) - Number(cashOutAmount);

//   if (newBalance < 0) {
//     alert("insufficient Balance");
//     return;
//   }

//   const inputPin = document.getElementById("cashout-pin");
//   const cashOutPin = inputPin.value;
//   if (cashOutPin === "1234") {
//     alert("Cash-Out Successful");
//     haveBalance.innerText = newBalance;
//   } else {
//     alert("Invalid Pin. Try Again!");
//     return;
//   }

//   agentNumberInput.value = "";
//   amountInput.value = "";
//   inputPin.value = "";
// });
