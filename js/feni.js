document.getElementById('feni-donation-btn').addEventListener(
    'click', function () {
        const donationValue = getInputFieldValueById('feni-donation-input');

        const balance = getTextFieldValueById('feni-balance');

        const grandTotal = getTextFieldValueById('grand-total');

        if (isNaN(donationValue) || donationValue < 0 || donationValue > grandTotal) {
            return alert("Enter a Valid Amount")
        }
        console.log(balance)
        const updatedBalance = donationValue + balance;
        const newGrandTotal = grandTotal - donationValue;

        document.getElementById('feni-balance').innerText = updatedBalance;
        document.getElementById('grand-total').innerText = newGrandTotal;
        document.getElementById('my_modal_1').showModal();
        document.getElementById('feni-donation-input').value = '';
    }
);