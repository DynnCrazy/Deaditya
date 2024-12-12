function showAlert(messageAlert) {
    alert(messageAlert);
}

const secretCodes = [
    { 
        combination: ['e', 'r', 'r', 'o', 'r'], 
        action: () => showAlert('ERROR!') 
    },
    { 
        combination: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'], 
        action: () => showAlert('Number') 
    },
    { 
        combination: ['h', 'e', 'l', 'p'], 
        action: () => showAlert('Help?') 
    },
    { 
        combination: ['c', 'h', 'a', 't'], 
        action: () => goToLink('chat') 
    }
];

const currentIndexes = Array(secretCodes.length).fill(0);

document.addEventListener('keydown', (event) => {
    const key = event.key.toLowerCase();

    secretCodes.forEach((secret, index) => {
        const expectedKey = secret.combination[currentIndexes[index]];

        if (key === expectedKey) {
            currentIndexes[index]++;

            if (currentIndexes[index] === secret.combination.length) {
                secret.action();
                currentIndexes[index] = 0;
            }
        } else {
            currentIndexes[index] = 0;
        }
    });
});