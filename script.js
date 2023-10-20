const buttons = document.querySelectorAll('.btn');
const inputDisplay = document.getElementById('input-display');
const enterBtn = document.getElementById('enter');
const backBtn = document.getElementById('back');
const botschaft = document.getElementById('botschaft');

let input = '';

buttons.forEach(btn => {
    btn.addEventListener('click', function() {
        const value = this.getAttribute('data-value');
        if (value) {
            input += value;
            updateDisplay();
        }
    });
});

enterBtn.addEventListener('click', function() {
    if (input === '7353') {
        botschaft.style.display = 'block';
    } else {
        input = '';
        updateDisplay();
        alert('Falscher Code!');
    }
});

backBtn.addEventListener('click', function() {
    input = input.slice(0, -1);
    updateDisplay();
});

function updateDisplay() {
    inputDisplay.textContent = input;
}
