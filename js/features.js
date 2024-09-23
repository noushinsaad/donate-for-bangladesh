document.getElementById('donation-btn').addEventListener(
    'click', function () { 
        showSectionById('donation-section');
        showBgColorGreenById('donation-btn');
    }
);

document.getElementById('history-btn').addEventListener(
    'click', function () {
        showBgColorGreenById('history-btn');
        showSectionById('history-section');
    }
);