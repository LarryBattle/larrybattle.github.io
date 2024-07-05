const currencyData = [
    {value: 100, type: 'bill', color: '#90A955', text: '$100', name: 'Hundred Dollar Bill', isDefault: false},
    {value: 20, type: 'bill', color: '#4F772D', text: '$20', name: 'Twenty Dollar Bill', isDefault: false},
    {value: 10, type: 'bill', color: '#31572C', text: '$10', name: 'Ten Dollar Bill', isDefault: false},
    {value: 5, type: 'bill', color: '#132A13', text: '$5', name: 'Five Dollar Bill', isDefault: false},
    {value: 1, type: 'bill', color: '#00994C', text: '$1', name: 'One Dollar Bill', isDefault: true},
    {value: 0.25, type: 'coin', color: '#C0C0C0', text: '25¢', name: 'Quarter', isDefault: true},
    {value: 0.10, type: 'coin', color: '#C0C0C0', text: '10¢', name: 'Dime', isDefault: true},
    {value: 0.05, type: 'coin', color: '#C0C0C0', text: '5¢', name: 'Nickel', isDefault: true},
    {value: 0.01, type: 'coin', color: '#B87333', text: '1¢', name: 'Penny', isDefault: true}
];

// State
const state = {
    showCoinNames: true,
    showRemainder: true,
    challengeTotal: 0,
    makeAmountTarget: 0,
    makeAmountCurrent: 0,
    makeAmountUnits: {},
    practiceTotal: 0,
    minPieces: 1,
    maxPieces: 4
};

// Utility functions
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

function createValidId(value) {
    return `toggle-${value.toString().replace('.', '-')}`;
}

function createCurrencyElement(item, clickable = false) {
    const element = document.createElement('div');
    element.className = 'money-item';
    element.dataset.value = item.value;
    
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 100 100');
    
    if (item.type === 'bill') {
        svg.innerHTML = `
            <rect width="100" height="50" fill="${item.color}"/>
            <circle cx="50" cy="25" r="20" fill="#FFFFFF"/>
            <text x="50" y="30" font-size="12" text-anchor="middle" fill="#000000">${item.text}</text>
        `;
    } else {
        svg.innerHTML = `
            <circle cx="50" cy="50" r="45" fill="${item.color}"/>
            <text x="50" y="55" font-size="14" text-anchor="middle" fill="${item.color === '#B87333' ? '#FFFFFF' : '#000000'}">
                ${state.showCoinNames ? item.name : item.text}
            </text>
        `;
    }
    
    element.appendChild(svg);

    if (clickable) {
        const clickCount = document.createElement('div');
        clickCount.className = 'click-count';
        clickCount.textContent = '0';
        element.appendChild(clickCount);
    }

    return element;
}


function generateRandomMoney() {
    const maxAmount = parseFloat($('#max-amount').value);
    const selectedCurrencies = getSelectedCurrencies();
    let total = 0;
    const items = [];
    const pieceCount = Math.floor(Math.random() * (state.maxPieces - state.minPieces + 1)) + state.minPieces;
    let attempts = 0;
    const maxAttempts = 100; // Prevent infinite loops

    // Find the smallest selected currency
    const smallestCurrency = selectedCurrencies.reduce((min, curr) => curr.value < min.value ? curr : min);

    while (total < maxAmount && items.length < pieceCount && attempts < maxAttempts) {
        const remainingAmount = maxAmount - total;
        const availableCurrencies = selectedCurrencies.filter(c => c.value <= remainingAmount);
        
        if (availableCurrencies.length === 0) {
            // If no currency fits, add the smallest one and break the loop
            if (items.length < pieceCount) {
                items.push(smallestCurrency);
                total += smallestCurrency.value;
            }
            break;
        }

        const item = availableCurrencies[Math.floor(Math.random() * availableCurrencies.length)];
        total += item.value;
        items.push(item);
        attempts++;
    }

    // If we couldn't generate any items, just return the smallest currency
    if (items.length === 0) {
        items.push(smallestCurrency);
        total = smallestCurrency.value;
    }

    return { items, total: parseFloat(total.toFixed(2)) };
}

function updatePieceRange() {
    const range = $('#piece-range');
    state.minPieces = 1;
    state.maxPieces = parseInt(range.value);
    $('#piece-range-value').textContent = state.maxPieces;
    $('#piece-range-display').textContent = `1 - ${state.maxPieces} pieces`;
    newCountingChallenge();
}

function getSelectedCurrencies() {
    return currencyData.filter(item => $(`#${createValidId(item.value)}`).checked);
}


// Counting Challenge
function newCountingChallenge() {
    $('#challenge-container').innerHTML = '';
    const { items, total } = generateRandomMoney();
    state.challengeTotal = total;
    items.forEach(item => {
        $('#challenge-container').appendChild(createCurrencyElement(item));
    });
    $('#challenge-input').value = '';
    $('#challenge-result').textContent = '';
}

function checkCountingChallenge() {
    const userValue = parseFloat($('#challenge-input').value);
    const resultElement = $('#challenge-result');
    if (userValue === state.challengeTotal) {
        resultElement.textContent = "Correct! Great job!";
        resultElement.style.color = "green";
    } else {
        resultElement.textContent = "Not quite. Try again!";
        resultElement.style.color = "red";
    }
}

// Make Amount Challenge
function initializeMakeAmount() {
    $('#make-amount-container').innerHTML = '';
    getSelectedCurrencies().forEach(item => {
        const element = createCurrencyElement(item, true);
        element.addEventListener('click', () => {
            state.makeAmountCurrent += item.value;
            state.makeAmountUnits[item.value] = (state.makeAmountUnits[item.value] || 0) + 1;
            updateMakeAmountDisplay();
            const clickCount = element.querySelector('.click-count');
            clickCount.textContent = parseInt(clickCount.textContent) + 1;
        });
        $('#make-amount-container').appendChild(element);
    });
}

function updateMakeAmountDisplay() {
    $('#make-amount-total').textContent = `Your Total: $${state.makeAmountCurrent.toFixed(2)}`;
    const remainder = state.makeAmountTarget - state.makeAmountCurrent;
    if (state.showRemainder) {
        $('#make-amount-remainder').textContent = `Remainder: $${remainder.toFixed(2)}`;
        $('#make-amount-remainder').style.color = +(remainder.toFixed(2)) === 0 ? 'green' : 'red';
    } else {
        $('#make-amount-remainder').textContent = '';
    }
}

function setNewTargetAmount() {
    if ($('#random-target').checked) {
        state.makeAmountTarget = Math.random() * 10;
    } else {
        state.makeAmountTarget = parseFloat($('#manual-target').value) || 0;
    }
    $('#target-amount').textContent = `Target Amount: $${state.makeAmountTarget.toFixed(2)}`;
    resetUnits();
    updateMakeAmountDisplay(); // This will prevent the premature "congratulations" message
}

function resetUnits() {
    state.makeAmountCurrent = 0;
    state.makeAmountUnits = {};
    updateMakeAmountDisplay();
    $$('#make-amount-container .click-count').forEach(el => el.textContent = '0');
}

function isOptimalSolution() {
    const optimalSolution = calculateOptimalSolution(state.makeAmountTarget);
    return JSON.stringify(state.makeAmountUnits) === JSON.stringify(optimalSolution);
}

function calculateOptimalSolution(amount) {
    const sortedCurrency = currencyData.slice().sort((a, b) => b.value - a.value);
    const optimalUnits = {};
    let remainingAmount = amount;

    for (const currency of sortedCurrency) {
        const count = Math.floor(remainingAmount / currency.value);
        if (count > 0) {
            optimalUnits[currency.value] = count;
            remainingAmount -= count * currency.value;
        }
    }

    return optimalUnits;
}

function showOptimalSolution() {
    const optimalSolution = calculateOptimalSolution(state.makeAmountTarget);
    let optimalContent = "<ul>";
    for (const [value, count] of Object.entries(optimalSolution)) {
        const currency = currencyData.find(c => c.value === parseFloat(value));
        optimalContent += `<li>${count} x ${currency.name} (${currency.text})</li>`;
    }
    optimalContent += "</ul>";
    $('#optimal-content').innerHTML = optimalContent;
    $('#optimal-dialog').showModal();
}

// Practice Area
function initializePractice() {
    $('#practice-container').innerHTML = '';
    getSelectedCurrencies().forEach(item => {
        const element = createCurrencyElement(item, true);
        element.addEventListener('click', () => {
            state.practiceTotal += item.value;
            $('#practice-total').textContent = `Total: $${state.practiceTotal.toFixed(2)}`;
            const clickCount = element.querySelector('.click-count');
            clickCount.textContent = parseInt(clickCount.textContent) + 1;
        });
        $('#practice-container').appendChild(element);
    });
}

function resetPractice() {
    state.practiceTotal = 0;
    $('#practice-total').textContent = 'Total: $0.00';
    $$('#practice-container .click-count').forEach(el => el.textContent = '0');
}

// Settings

function initializeCurrencyToggles() {
    const currencyToggles = $('#currency-toggles');
    currencyData.forEach(item => {
        const label = document.createElement('label');
        const id = createValidId(item.value);
        label.innerHTML = `
            <input type="checkbox" id="${id}" ${item.isDefault ? 'checked' : ''}>
            ${item.name} (${item.text})
        `;
        currencyToggles.appendChild(label);
        $(`#${id}`).addEventListener('change', newCountingChallenge);
    });
    
    currencyData.forEach(item => {
        $(`#${createValidId(item.value)}`).addEventListener('change', updateMaxAmount);
    });
}
// Tab Functionality
function initializeTabs() {
    $$('.tab-button').forEach(button => {
        button.addEventListener('click', () => {
            $$('.tab-button').forEach(b => b.classList.remove('active'));
            $$('.tab-content').forEach(c => c.classList.remove('active'));
            button.classList.add('active');
            $(`#${button.dataset.tab}`).classList.add('active');
        });
    });
}
function updateMaxAmount() {
    const maxAmountInput = $('#max-amount');
    const selectedCurrencies = getSelectedCurrencies();
    const smallestValue = Math.min(...selectedCurrencies.map(c => c.value));
    
    if (parseFloat(maxAmountInput.value) < smallestValue) {
        maxAmountInput.value = smallestValue.toFixed(2);
    }
    
    newCountingChallenge();
    initializeMakeAmount();
    initializePractice();
}

// Event Listeners
$('#piece-range').addEventListener('input', updatePieceRange);
$('#check-button').addEventListener('click', checkCountingChallenge);
$('#new-challenge-button').addEventListener('click', newCountingChallenge);
$('#reset-make-amount').addEventListener('click', setNewTargetAmount);
$('#random-target').addEventListener('change', setNewTargetAmount);
$('#manual-target').addEventListener('change', setNewTargetAmount);
$('#reset-units').addEventListener('click', resetUnits);
$('#show-optimal').addEventListener('click', showOptimalSolution);
$('#close-dialog').addEventListener('click', () => $('#optimal-dialog').close());
$('#reset-practice').addEventListener('click', resetPractice);
$('#max-amount').addEventListener('change', updateMaxAmount);
$('#toggle-names').addEventListener('change', () => {
    state.showCoinNames = $('#toggle-names').checked;
    newCountingChallenge();
    initializeMakeAmount();
    initializePractice();
});
$('#toggle-remainder').addEventListener('change', () => {
    state.showRemainder = $('#toggle-remainder').checked;
    updateMakeAmountDisplay();
});

// Initialize
initializeTabs();
initializeCurrencyToggles();
newCountingChallenge();
initializeMakeAmount();
initializePractice();
setNewTargetAmount();
updatePieceRange();
