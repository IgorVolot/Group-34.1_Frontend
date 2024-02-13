const base_url = 'https://api.apilayer.com/fixer';

const api_key = 'iSbv0BEjr5U0AZTOkhAwCvX5tt6yhUxN';

convert.onclick = () => {
    // const sum = document.getElementById('sum').value;
    // const from = document.getElementById('from').value;
    // const to = document.getElementById('to').value;

    fetch(`${base_url}/convert?from=${from.value.trim()}&to=${to.value.trim()}&amount=${sum.value.trim()}`, {
        headers: {
            apikey: api_key
        }
    })
        .then(result => result.json())
        .then(data => data.result)
        .then(res => {
            const h1 = document.createElement('h1');
            h1.append(`Result: ${res.toFixed(2)}`)
            if (result.firstElementChild){
                result.replaceChild(h1, result.firstElementChild)
            } else {
                result.append(h1);
            }
        })
        .catch(e => {
            const h1 = document.createElement('h1');
            h1.append('Error')
            if (result.firstElementChild){
                result.replaceChild(h1, result.firstElementChild)
            } else {
                result.append('h1');
            }
        })
        // .then(response => response.json())
        // .then(data => {
        //     const convertedAmount = data.result;
        //     document.getElementById('result').innerHTML = convertedAmount;
        // })
        // .catch(error => {
        //     console.error(error);
        // });
}