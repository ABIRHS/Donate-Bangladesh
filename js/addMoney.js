document
  .getElementById("btn-donate")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const addValue = document.getElementById("input-money").value;
    const addMoney = parseFloat(addValue);

    const newBalanceInt = document.getElementById("new-balance").innerText;
    const newBalance = parseFloat(newBalanceInt);

    const totalDonation = newBalance + addMoney;

    document.getElementById("new-balance").innerText = totalDonation;
  });
