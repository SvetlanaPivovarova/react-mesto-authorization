const BASE_URL = 'https://auth.nomoreparties.co';

export const register = (password, email) => {
    return fetch(`${BASE_URL}/signup`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "password": password,
            "email": email
        })
    })
        .then(checkResponse)
        .catch(err => {
            console.log(err);
        })
}

export const login = (password, email) => {
    return fetch(`${BASE_URL}/signin`, {
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
        .catch((err) => {
            console.log(err);
        })
}

export const checkToken = (token) => {
    return fetch(`${BASE_URL}/users/me`, {
        method: "GET",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    })
        .then(res => {
            if (res.status === 200) {
                return res.json();
            }
        })
        .then(res => res)
        .catch(err => {
            console.log(err);
        })
}

const checkResponse = (response) => {
    if (response.ok) {
        console.log('result:', response);
        return response.json();
    }
    return response.json().then(res => {
        throw res.error;
    })
}