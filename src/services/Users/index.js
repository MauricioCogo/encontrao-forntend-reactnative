import { get, put, del } from '../index'

const getUser = async (cpf) => {

    try {
        const body = await get(`users/cpf/${cpf}`)

        console.warn("get cpf: ", body);

        return body
    } catch (e) {
        return {
            success: false,
            message: 'Erro: ' + e,
            response: {},
        }
    }
}

const getUsers = async () => {
    try {
        const body = await get(`users`)

        if (!body.success) {
            throw body.message
        }

        return body.response
    } catch (e) {
        return {
            success: false,
            message: 'Erro: ' + e,
            response: {},
        }
    }
}

const setImage = async (cpf, base64Image) => {
    try {

        if (!base64Image.startsWith('data:image/png;base64,') && !base64Image.startsWith('data:image/jpeg;base64,')) {
            // Adicione o prefixo correto se não estiver presente
            base64Image = 'data:image/png;base64,' + base64Image; // Ou 'data:image/jpeg;base64,' conforme necessário
        }

        const body = {
            avatar: base64Image
        };

        console.warn(body);


        const response = await put(`users/image/${cpf}`, {}, body); // Passando o corpo


        return response;
    } catch (e) {
        return {
            success: false,
            message: 'Erro: ' + e,
            response: {},
        };
    }
}

const deleteUser = async (id) => {
    try {
        const body = await del(`users/delete/${id}`)

        if (!body.success) {
            throw body
        }

        return body
    } catch (e) {
        return e
    }
}

export { getUser, getUsers, setImage, deleteUser }