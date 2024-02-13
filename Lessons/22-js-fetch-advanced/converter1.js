document.addEventListener('DOMContentLoaded', function () {
    fetchCurrencies();
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

    const fromInput = document.getElementById('from');
    const toInput = document.getElementById('to');
    fromInput.parentNode.replaceChild(fromSelect, fromInput);
    toInput.parentNode.replaceChild(toSelect, toInput);
}

convert.onclick = () => {
    const fromCurrency = document.getElementById('from-currency').value;
    const toCurrency = document.getElementById('to-currency').value;
    const amount = document.getElementById('sum').value;

    fetch(`${base_url}/convert?from=${fromCurrency}&to=${toCurrency}&amount=${amount}`, {
        headers: {
            apikey: api_key
        }
    })
        .then(result => result.json())
        .then(data => data.result)
        .then(res => {
            const h1 = document.createElement('h1');
            h1.append(`Result: ${res.toFixed(2)}`)
            if (result.firstElementChild) {
                result.replaceChild(h1, result.firstElementChild)
            } else {
                result.append(h1);
            }
        })
        .catch(e => {
            const h1 = document.createElement('h1');
            h1.append('Error')
            if (result.firstElementChild) {
                result.replaceChild(h1, result.firstElementChild)
            } else {
                result.append('h1');
            }
        })
}


