document
  .getElementById("btn-donate")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const addValue = document.getElementById("input-money").value;
    const addMoney = parseFloat(addValue);

    const currentBalanceInt =
      document.getElementById("current-balance").innerText;
    const currentBalance = parseFloat(currentBalanceInt);

    const updatedCurrentBalance = currentBalance - addMoney;

    console.log(currentBalance);
    console.log(addMoney);
    console.log(addValue);

    document.getElementById("current-balance").innerText =
      updatedCurrentBalance;

    document.getElementById("input-money").value = "";
  });
