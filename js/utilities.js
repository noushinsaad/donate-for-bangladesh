function getInputFieldValueById(id) {
    const inputValue = document.getElementById(id).value;
    const inputValueNumber = parseFloat(inputValue);
    return inputValueNumber;
}

function getTextFieldValueById(id) {
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}

function showSectionById(id) {
    document.getElementById('donation-section').classList.add('hidden');
    document.getElementById('history-section').classList.add('hidden');
    // show the section with the provide as parameter
    document.getElementById(id).classList.remove('hidden');
}

function showBgColorGreenById(id){
    document.getElementById('donation-btn').classList.remove('bg-green-400');   
    document.getElementById('history-btn').classList.remove('bg-green-400');

    document.getElementById(id).classList.add('bg-green-400');
}

