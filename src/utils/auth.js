const BASE_URL = 'https://auth.nomoreparties.co';

export const register = (password, email) => {
    console.log({
        "password": password,
        "email": email
    });
    return fetch(`${BASE_URL}/signup`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "password": password,
            "email": email
        }),
    })
        .then(checkResponse)
        .catch(err => {
            console.log(err);
        })
}

const checkResponse = (response) => {
    if (response.ok) {
        return response.json();
    }
    return response.json().then(res => {
        throw res.message;
    })
}