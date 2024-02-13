const base_url = 'https://webaccounting.herokuapp.com';

register.onclick = () => {
    const user = {
        "firstName": firstName.value.trim(),
        "lastName": lastName.value.trim(),
        "login": login.value.trim(),
        "password": password.value
    }
    fetch(`${base_url}/account/user`, {
        method: 'Post',
        body: JSON.stringify(user),
        headers: {
            "Content-Type": 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(e => console.log(e))
}