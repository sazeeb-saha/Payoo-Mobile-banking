document
  .getElementById("transfer-money-btn")
  .addEventListener("click", function () {
    const transferMoneyNumber = getValueFromInput("transfer-money-number");
    if (transferMoneyNumber.length != 11) {
      alert("Invalid User Number");
      return;
    }

    const transferMoneyAmount = getValueFromInput("transfer-money-amount");
    if (transferMoneyAmount <= 0 || transferMoneyAmount == "") {
      alert("Invalid Amount");
      return;
    }

    const currentBalance = getBalance();
    const newBalance = currentBalance - Number(transferMoneyAmount);
    if (newBalance < 0) {
      alert("Insufficient Balance");
      return;
    }

    const transferMoneyPin = getValueFromInput("transfer-money-pin");
    if (transferMoneyPin == "1234") {
      alert(
        `Transfer Money Successfully TK-${transferMoneyAmount} to Account NO-${transferMoneyNumber} at ${new Date()}`,
      );
      setBalance(newBalance);
    } else {
      alert("Invalid Pin!! Try Again.");
      return;
    }
  });
