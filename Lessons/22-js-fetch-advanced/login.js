const base_url = 'https://webaccounting.herokuapp.com';

signin.onclick = () => {
    fetch(`${base_url}/account/login`, {
        method: 'Post',
        headers: {
            Authorization: `Basic ${btoa(`${login.value}:${password.value}`)}`
        }
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(e => console.log(e))
}