document
  .getElementById("btn-donate")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const addMoney = getElementValueById("noakhali-input-money");

    const currentBalance = getTextFieldValueById("current-balance");

    const updatedCurrentBalance = currentBalance - addMoney;

    document.getElementById("current-balance").innerText =
      updatedCurrentBalance;

    document.getElementById("noakhali-input-money").value = "";
  });
