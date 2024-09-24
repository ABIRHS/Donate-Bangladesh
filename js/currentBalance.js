document
  .getElementById("btn-noakhali-donate")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const addMoney = getElementValueById("noakhali-input-money");

    const currentBalance = getTextFieldValueById("current-balance");

    const updatedCurrentBalance = currentBalance - addMoney;

    document.getElementById("current-balance").innerText =
      updatedCurrentBalance;

    document.getElementById("noakhali-input-money").value = "";
  });

document
  .getElementById("btn-feni-donate")
  .addEventListener("click", function (event) {
    event.preventDefault();

    if (isNaN(donationAmount) || donationAmount <= 0) {
      alert("Invalid Input Number");
      return;
    }

    const addMoney = getElementValueById("feni-input-money");

    const currentBalance = getTextFieldValueById("current-balance");

    const updatedCurrentBalance = currentBalance - addMoney;

    document.getElementById("current-balance").innerText =
      updatedCurrentBalance;

    document.getElementById("feni-input-money").value = "";
  });

document
  .getElementById("btn-quota-donate")
  .addEventListener("click", function (event) {
    event.preventDefault();

    if (isNaN(donationAmount) || donationAmount <= 0) {
      alert("Invalid Input Number");
      return;
    }

    const addMoney = getElementValueById("quota-input-money");

    const currentBalance = getTextFieldValueById("current-balance");

    const updatedCurrentBalance = currentBalance - addMoney;

    document.getElementById("current-balance").innerText =
      updatedCurrentBalance;

    document.getElementById("quota-input-money").value = "";
  });
