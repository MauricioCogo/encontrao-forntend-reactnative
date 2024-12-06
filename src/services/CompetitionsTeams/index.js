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

const getParticipantsByFecult = async () => {
    try {
        const body = await get(`competitions-teams/fecult`);
        console.warn("corpo", body);


        return body;
    } catch (e) {
        return {
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

export { getCompetitionTeam, getCompetitionTeams, delCompetition, getParticipants, getParticipantsByFecult }