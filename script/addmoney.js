document.getElementById("addmoney-btn").addEventListener("click", function () {
  const bankName = getValueFromInput("bank-name");
  if (bankName == "Select A Bank") {
    alert("Please Select A Bank First!!");
    return;
  }

  const accountNumber = getValueFromInput("bank-acc-number");
  if (accountNumber.length != 11) {
    alert("Invalid Account Number");
    return;
  }

  const addMoneyAmount = getValueFromInput("addmoney-amount");
  const amount = getBalance();
  const newBalance = amount + Number(addMoneyAmount);

  const addMoneyPin = getValueFromInput("addmoney-pin");
  if (addMoneyPin == "1234") {
    alert(
      `Successfully Added Money From ${bankName} Account No:- ${accountNumber} at ${new Date()}`,
    );
    setBalance(newBalance);
  } else {
    alert("Invalid Pin. Try Again!");
    return;
  }
});
