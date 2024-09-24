document
  .getElementById("btn-donate")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const addMoney = getElementValueById("noakhali-input-money");

    const newBalanceInt = document.getElementById(
      "noakhali-new-balance"
    ).innerText;
    const newBalance = parseFloat(newBalanceInt);

    const totalDonation = newBalance + addMoney;
    console.log(totalDonation);
    document.getElementById("noakhali-new-balance").innerText = totalDonation;
  });
