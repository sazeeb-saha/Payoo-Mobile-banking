document.getElementById("login-btn").addEventListener("click", function () {
  const inputNumber = document.getElementById("input-number");
  const mobileNumber = inputNumber.value;
  const inputPin = document.getElementById("input-pin");
  const pin = inputPin.value;
  if (mobileNumber == "01637847676" && pin == "1234") {
    alert("login successful");
    window.location.assign("../home.html");
  } else {
    alert("login failed");
    return;
  }
});
