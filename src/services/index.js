import axios from 'axios';

// Crie a instância do Axios
const instance = axios.create({
    baseURL: "http://192.168.1.16:8080/",
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});

const end = ""

const getUrl = async (cpf) => {

    return instance.defaults.baseURL + (`users/cpf/${cpf}`)
}

// Função GET
const get = async (endpoint, headers = {}) => {
    try {
        console.warn("BASE URL: ", instance.defaults.baseURL); // Mostra a baseURL
        console.warn("ENDPOINT: ", endpoint);
        end = endpoint
        console.warn("URL COMPLETO: ", instance.defaults.baseURL + endpoint);
        console.warn("Instância: ", instance);
        const { data } = await instance.get(endpoint);
        console.warn("Resultado: ", data);
        return data;
    } catch (e) {
        console.error(e);
        return e;
    }
}

// Função POST
const post = async (endpoint, body, headers = {}) => {
    try {
        const { data } = await instance.post(endpoint, body, { headers });
        return data;
    } catch (e) {
        console.error(e.message);
        return e;
    }
}

// Função PATCH
const patch = async (endpoint, body, headers = {}) => {
    try {
        const { data } = await instance.patch(endpoint, body, { headers });
        return data;
    } catch (e) {
        console.error(e.message);
        return e;
    }
}

// Função PUT
const put = async (endpoint, body, headers = {}) => {
    try {
        const { data } = await instance.put(endpoint, body, { headers });
        return data;
    } catch (e) {
        console.error(e);
        return e;
    }
}

// Função DELETE
const del = async (endpoint, headers = {}) => {
    try {
        const { data } = await instance.delete(endpoint, { headers });
        return data;
    } catch (e) {
        console.error(e);
        return e;
    }
}

export { getUrl, get, post, put, del, patch };
