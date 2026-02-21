document.getElementById("biller-btn").addEventListener("click", function () {
  const billerName = getValueFromInput("biller-name");
  if (billerName == "Select A Payee") {
    alert("Select A Payee First!");
    return;
  }

  const billerAccountNumber = getValueFromInput("biller-acc-number");
  if (billerAccountNumber.length != 11) {
    alert("Invalid Account Number");
    return;
  }

  const billerAmount = getValueFromInput("biller-amount");
  if (billerAmount <= 0 || billerAmount == "") {
    alert("Invalid Amount");
    return;
  }

  const currentBalance = getBalance();
  const newBalance = currentBalance - Number(billerAmount);
  if (newBalance < 0) {
    alert("Insufficient Balance");
    return;
  }

  const billerPin = getValueFromInput("biller-pin");
  if (billerPin == "1234") {
    alert(
      `Bill Pay Successfully TK-${billerAmount} to Account No-${billerAccountNumber} at ${new Date()} `,
      setBalance(newBalance),
    );
  } else {
    alert("Invalid Pin");
  }
});
