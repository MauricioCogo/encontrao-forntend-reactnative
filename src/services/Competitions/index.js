import { get, put, del } from '../index'

const getCompetition = async (id) => {
    try {
        const body = await get(`competitions/${id}`)

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

const getCompetitions = async () => {
    try {
    const body = await get(`competitions`);
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

const getCompetitionsCommission = async () => {
    try {
        const body = await get(`competitions/commission`);
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


const delCtecompetition = async (id) => {
    try {
        const body = await del(`competitions/${id}`)

        if (!body.success) {
            throw body
        }

        return body
    } catch (e) {
        return e
    }
}

export { getCompetition, getCompetitions, delCtecompetition, getCompetitionsCommission }