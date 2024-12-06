import { get, post, del } from '../index'

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

const getGradeTeam = async (id) => {
    try {
        const body = await get(`commissions/grade/${id}`);
        return body;
    } catch (e) {
        return {
            success: false,
            message: 'Erro: ' + e,
            response: {},
        };
    }
}

const setGrade = async (data) => {
    try {
        const body = await post(`commissions/`, data);
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

export { getCommission, getCommissions, delCtecompetition, getGrade, setGrade, getGradeTeam }