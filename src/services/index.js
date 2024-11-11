import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://192.168.1.17:8080/',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
})

const get = async (endpoint, headers, body) => {
    try {


        console.warn("BASE URL: ", instance.defaults.baseURL); // Mostra a baseURL
        console.warn("ENDPOINT: ", endpoint);
        console.warn("URL COMPLETO: ", instance.defaults.baseURL + endpoint);

        const { data } = await instance.get(endpoint)

        console.warn("data", data)
        // const { success } = data
        // console.warn(success);

        // if (!success) {
        //     throw data
        // }

        return data
    } catch (e) {
        console.error(e)
        return e
    }
}

const post = async (endpoint, headers, body) => {
    try {
        const { data } = await instance.post(endpoint, body, headers)

        const { success } = data

        if (!success) {
            throw data
        }

        return data
    } catch (e) {
        console.error(e.message)
        return e
    }
}

const patch = async (endpoint, headers, body) => {
    try {
        const { data } = await instance.patch(endpoint, body, headers)

        const { success } = data

        if (!success) {
            throw data
        }

        return data
    } catch (e) {
        console.error(e.message)
        return e
    }
}

const put = async (endpoint, headers, body) => {
    try {
        const { data } = await instance.put(endpoint, body, headers)

        const { success } = data

        if (!success) {
            throw data
        }

        return data
    } catch (e) {
        console.error(e)
        return e
    }
}

const del = async (endpoint, headers, body) => {
    try {
        const { data } = await instance.delete(endpoint)

        const { success } = data

        if (!success) {
            throw data
        }

        return data
    } catch (e) {
        console.error(e)
        return e
    }
}

export { get, post, put, del, patch }