document
  .getElementById("btn-noakhali-donate")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const donationAmount = getElementValueById("noakhali-input-money");

    if (isNaN(donationAmount) || donationAmount <= 0) {
      alert("Invalid Input Number");
      return;
    }

    const newBalanceInt = document.getElementById(
      "noakhali-new-balance"
    ).innerText;
    const newBalance = parseFloat(newBalanceInt);

    const totalDonation = newBalance + donationAmount;
    document.getElementById("noakhali-new-balance").innerText = totalDonation;
  });

document
  .getElementById("btn-feni-donate")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const donationAmount = getElementValueById("feni-input-money");

    if (isNaN(donationAmount) || donationAmount <= 0) {
      alert("Invalid Input Number");
      return;
    }

    const newBalanceInt = document.getElementById("feni-new-balance").innerText;
    const newBalance = parseFloat(newBalanceInt);

    const totalDonation = newBalance + donationAmount;
    document.getElementById("feni-new-balance").innerText = totalDonation;
  });

document
  .getElementById("btn-quota-donate")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const donationAmount = getElementValueById("quota-input-money");

    if (isNaN(donationAmount) || donationAmount <= 0) {
      alert("Invalid Input Number");
      return;
    }

    const newBalanceInt =
      document.getElementById("quota-new-balance").innerText;
    const newBalance = parseFloat(newBalanceInt);

    const totalDonation = newBalance + donationAmount;
    document.getElementById("quota-new-balance").innerText = totalDonation;
  });
