document.getElementById('noakhali-donation-btn').addEventListener(
    'click', function () {
        const history = document.getElementById('history-section');

        const donationValue = getInputFieldValueById('noakhali-donation-input');

        const balance = getTextFieldValueById('noakhali-donation-output');

        const grandTotal = getTextFieldValueById('grand-total');
        let now = new Date();

        if (isNaN(donationValue) || donationValue < 0 || donationValue > grandTotal) {
            return alert("Enter a Valid Amount")
        }

        const updatedBalance = donationValue + balance;
        const newGrandTotal = grandTotal - donationValue;

        document.getElementById('noakhali-donation-output').innerText = updatedBalance;
        document.getElementById('grand-total').innerText = newGrandTotal;
        document.getElementById('my_modal_1').showModal();

        history.innerHTML += `
            <div class="border-2 rounded-xl p-10 space-y-4 w-9/12">
                <h4 class="font-bold">${donationValue} Taka is Donated for famine-2024 at Noakhali, Bangladesh</h4>
                <p>${now.toString()}</p>
            </div>
        ` 

        document.getElementById('noakhali-donation-input').value = '';
    }
);