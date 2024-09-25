document.getElementById('feni-donation-btn').addEventListener(
    'click', function () {
        const history = document.getElementById('history-section');
        
        const donationValue = getInputFieldValueById('feni-donation-input');

        const balance = getTextFieldValueById('feni-balance');

        const grandTotal = getTextFieldValueById('grand-total');

        let now=new Date();

        if (isNaN(donationValue) || donationValue < 0 || donationValue > grandTotal) {
            return alert("Invalid Donation Amount")
        }

        const updatedBalance = donationValue + balance;
        const newGrandTotal = grandTotal - donationValue;

        document.getElementById('feni-balance').innerText = updatedBalance;
        document.getElementById('grand-total').innerText = newGrandTotal;
        document.getElementById('my_modal_1').showModal();

        history.innerHTML += `
            <div class="border-2 rounded-xl p-10 space-y-4 w-9/12">
                <h4 class="font-bold">${donationValue} Taka is Donated for famine-2024 at Feni, Bangladesh</h4>
                <p class="bg-slate-100 p-2 rounded-md text-sm">Date: ${now.toString()}</p>
            </div>
        `   
            

        document.getElementById('feni-donation-input').value = '';
    }
);