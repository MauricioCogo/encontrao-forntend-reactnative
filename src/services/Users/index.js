import { get, put, del } from '../index'

const getUser = async (cpf) => {

    try {
        const body = await get(`users/cpf/${cpf}`)

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

export { getUser, getUsers, deleteUser }