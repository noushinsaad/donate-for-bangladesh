console.log('quota button clicked')

document.getElementById('quota-reform-donation-btn').addEventListener(
    'click', function () {
        const donationValue = getInputFieldValueById('quota-reform-donation-input');

        const balance = getTextFieldValueById('quota-reform-balance');

        const grandTotal = getTextFieldValueById('grand-total');

        if (isNaN(donationValue) || donationValue < 0 || donationValue > grandTotal) {
            return alert("Enter a Valid Amount");
        }
        console.log(balance)
        const updatedBalance = donationValue + balance;
        const newGrandTotal = grandTotal - donationValue;

        document.getElementById('quota-reform-balance').innerText = updatedBalance;
        document.getElementById('grand-total').innerText = newGrandTotal;
        document.getElementById('my_modal_1').showModal();
        document.getElementById('quota-reform-donation-input').value = '';
    }
);