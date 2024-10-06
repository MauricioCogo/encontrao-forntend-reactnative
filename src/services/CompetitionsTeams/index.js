import { get, put, del } from '../index'

const getCompetitionTeam = async (id) => {
    try {
        const body = await get(`competitions-teams/${id}`)

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

const getCompetitionTeams = async () => {
    try {
        const body = await get(`competitions-teams`);
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

const getParticipants = async (id) => {
    try {
        const body = await get(`competitions-teams/participants/${id}`);

        return body;
    } catch (e) {
        return {
            success: false,
            message: 'Erro: ' + e,
            response: {},
        };
    }
}

const getParticipantsByCommission = async (id) => {
    try {
        const body = await get(`competitions-teams/competition/${id}`);

        console.warn("corpo", body.response);


        return body.response;
    } catch (e) {
        return {
            aaaaa: aaaaaaaaaaa,
            success: false,
            message: 'Erro: ' + e,
            response: {},
        };
    }
}

const delCompetition = async (id) => {
    try {
        const body = await del(`competitions-teams/${id}`)

        if (!body.success) {
            throw body
        }

        return body
    } catch (e) {
        return e
    }
}

export { getCompetitionTeam, getCompetitionTeams, delCompetition, getParticipants, getParticipantsByCommission }