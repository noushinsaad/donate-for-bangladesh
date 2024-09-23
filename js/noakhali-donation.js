document.getElementById('noakhali-donation-btn').addEventListener(
    'click', function () {
        const donationValue = getInputFieldValueById('noakhali-donation-input');
        
        const balance = getTextFieldValueById('noakhali-donation-output');

        const grandTotal = getTextFieldValueById('grand-total');

        if(isNaN(donationValue) || donationValue<0 || donationValue>grandTotal){
            return alert("Enter a Valid Amount")
        }
        console.log(balance)
        const updatedBalance = donationValue + balance;
        const newGrandTotal=grandTotal-donationValue;
        
        document.getElementById('noakhali-donation-output').innerText = updatedBalance;
        document.getElementById('grand-total').innerText = newGrandTotal;
        document.getElementById('my_modal_1').showModal();
        document.getElementById('noakhali-donation-input').value='';
    }
);