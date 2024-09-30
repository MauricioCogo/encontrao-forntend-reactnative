import { get, put, del } from '../index'

const getPoint = async (id) => {
    try {
        const body = await get(`points/${id}`)

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

const getPoints = async () => {
    try {
        const body = await get(`points`);
        return body;
    } catch (e) {
        return {
            success: false,
            message: 'Erro: ' + e,
            response: {},
        };
    }
}

const deletePoint = async (id) => {
    try {
        const body = await del(`points/${id}`)

        if (!body.success) {
            throw body
        }

        return body
    } catch (e) {
        return e
    }
}

export { getPoint, getPoints, deletePoint }