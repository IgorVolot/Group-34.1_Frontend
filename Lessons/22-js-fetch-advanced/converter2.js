document.addEventListener('DOMContentLoaded', function () {
    // Fetch the list of available currencies and populate the select elements
    fetchCurrencies();

    // Setup the convert button click event handler
    document.getElementById('convert').addEventListener('click', convertCurrency);
});

const base_url = 'https://api.apilayer.com/fixer';
const api_key = 'iSbv0BEjr5U0AZTOkhAwCvX5tt6yhUxN';

function fetchCurrencies() {
    fetch(`${base_url}/symbols`, {
        headers: {
            'apikey': api_key
        }
    })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                populateSelectElements(data.symbols);
            } else {
                console.error('Failed to fetch currencies:', data.error);
            }
        })
        .catch(error => console.error('Error fetching currency symbols:', error));
}

function populateSelectElements(symbols) {
    const fromSelect = document.createElement('select');
    const toSelect = document.createElement('select');
    fromSelect.id = 'from-currency';
    toSelect.id = 'to-currency';

    Object.keys(symbols).forEach(symbol => {
        fromSelect.options.add(new Option(symbol, symbol));
        toSelect.options.add(new Option(symbol, symbol));
    });

    // Insert the select elements into the DOM
    const fromInput = document.getElementById('from');
    const toInput = document.getElementById('to');
    fromInput.parentNode.replaceChild(fromSelect, fromInput);
    toInput.parentNode.replaceChild(toSelect, toInput);
}

function convertCurrency() {
    const fromCurrency = document.getElementById('from-currency').value;
    const toCurrency = document.getElementById('to-currency').value;
    const amount = document.getElementById('sum').value;

    fetch(`${base_url}/convert?from=${fromCurrency}&to=${toCurrency}&amount=${amount}`, {
        headers: {
            'apikey': api_key
        }
    })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                displayResult(data.result);
            } else {
                displayError('Conversion failed: ' + (data.error.info || 'Unknown error'));
            }
        })
        .catch(error => displayError('Error converting currency: ' + error.message));
}

function displayResult(result) {
    const resultDiv = document.getElementById('result');
    const displayText = `Result: ${result.toFixed(2)}`;
    updateResultDisplay(resultDiv, displayText);
}

function displayError(message) {
    const resultDiv = document.getElementById('result');
    updateResultDisplay(resultDiv, message);
}

function updateResultDisplay(element, text) {
    element.innerHTML = ''; // Clear previous results
    const messageElement = document.createElement('h1');
    messageElement.textContent = text;
    element.appendChild(messageElement);
}