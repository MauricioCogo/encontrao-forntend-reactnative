import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://192.168.1.17:9090/',
});

const get = async (endpoint) => {
    try {
        console.warn("BASE URL: ", instance.defaults.baseURL); // Mostra a baseURL
        console.warn("ENDPOINT: ", endpoint);
        console.warn("URL COMPLETO: ", instance.defaults.baseURL + endpoint);
        const { data } = await instance.get(endpoint);
        console.warn("Data:", data);
        return data;
    } catch (e) {
        console.error(e);
        return e;
    }
};

const post = async (endpoint, body) => {
    try {

        const { data } = await instance.post(endpoint, body);
        const { success } = data;
        if (!success) throw data;
        return data;
    } catch (e) {
        console.error(e.message);
        return e;
    }
};

const patch = async (endpoint, body) => {
    try {
        const { data } = await instance.patch(endpoint, body);
        const { success } = data;
        if (!success) throw data;
        return data;
    } catch (e) {
        console.error(e.message);
        return e;
    }
};

const put = async (endpoint, body) => {
    try {
        // Aqui você deve usar `getAuthConfig()` para pegar os cabeçalhos de autenticação

        console.warn("BASE URL: ", instance.defaults.baseURL); // Mostra a baseURL
        console.warn("ENDPOINT: ", endpoint);
        console.warn("URL COMPLETO: ", instance.defaults.baseURL + endpoint);

        // Enviando a requisição PUT corretamente, passando o endpoint, corpo e a configuração
        const { data } = await instance.put(endpoint, body);

        return data;
    } catch (e) {
        console.error("sdfs", e);
        return e;
    }
};

const del = async (endpoint) => {
    try {
        const { data } = await instance.delete(endpoint);
        const { success } = data;
        if (!success) throw data;
        return data;
    } catch (e) {
        console.error(e);
        return e;
    }
};

export { get, post, put, del, patch };
