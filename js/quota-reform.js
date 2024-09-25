document.getElementById('quota-reform-donation-btn').addEventListener(
    'click', function () {
        const history = document.getElementById('history-section');


        const donationValue = getInputFieldValueById('quota-reform-donation-input');

        const balance = getTextFieldValueById('quota-reform-balance');

        const grandTotal = getTextFieldValueById('grand-total');
        let now = new Date();

        if (isNaN(donationValue) || donationValue < 0 || donationValue > grandTotal) {
            return alert("Invalid Donation Amount");
        }

        const updatedBalance = donationValue + balance;
        const newGrandTotal = grandTotal - donationValue;

        document.getElementById('quota-reform-balance').innerText = updatedBalance;
        document.getElementById('grand-total').innerText = newGrandTotal;
        document.getElementById('my_modal_1').showModal();

        history.innerHTML += `
            <div class="border-2 rounded-xl p-10 space-y-4 w-9/12">
                <h4 class="font-bold">${donationValue} Taka is Donated for famine-2024 at Quota Reform injured, Bangladesh</h4>
                <p class="bg-slate-100 p-2 rounded-md text-sm">Date: ${now.toString()}</p>
            </div>
        ` 

        document.getElementById('quota-reform-donation-input').value = '';
    }
);