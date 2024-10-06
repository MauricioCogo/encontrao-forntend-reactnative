import { get, patch, del } from '../index'

const getCommission = async (id) => {
    try {
        const body = await get(`commissions/${id}`)

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

const getCommissions = async () => {
    try {
        const body = await get(`commissions`);
        console.warn("teste");

        return body;
    } catch (e) {
        return {
            success: false,
            message: 'Erro: ' + e,
            response: {},
        };
    }
}

const getGrade = async (id) => {
    try {
        const body = await get(`commissions/byteam/${id}`);
        return body;
    } catch (e) {
        return {
            success: false,
            message: 'Erro: ' + e,
            response: {},
        };
    }
}

const setGrade = async (id) => {
    try {
        const body = await patch(`commissions/byteam/${id}`);
        return body;
    } catch (e) {
        return {
            success: false,
            message: 'Erro: ' + e,
            response: {},
        };
    }
}

const delCtecompetition = async (id) => {
    try {
        const body = await del(`commissions/${id}`)

        if (!body.success) {
            throw body
        }

        return body
    } catch (e) {
        return e
    }
}

export { getCommission, getCommissions, delCtecompetition, getGrade, setGrade }