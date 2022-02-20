//Guardar el token en el local storage

import { TOKEN } from "../utils/constants";

export function setToken(token) {
    localStorage.setItem(TOKEN, token);
}

export function getToken() {
    return localStorage.getItem(TOKEN);
}

export function removeToken() {
    localStorage.removeItem(TOKEN);
}