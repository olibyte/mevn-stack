import store from '../store';

export function isLoggedIn() {
    const token = localStorage.getItem('token');
    return token != null;
}

export function login() {
    const token = {
        username: 'oliver'
    }
    setToken(token);
}

function setToken(token) {
    localStorage.setItem('token', JSON.stringify(token)); //pass in key and values.
    store.dispatch('authenticate');
}

export function getUsername() {
    return 'oliver';
}

export function getUserId() {
    return 1;
}