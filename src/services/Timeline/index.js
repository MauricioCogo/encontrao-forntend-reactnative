import { get, put, del } from '../index'

const getTimeline = async (id) => {
    try {
        const body = await get(`timeline/${id}`)

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

const getTimelineByUser = async (id) => {
    try {
        const body = await get(`timeline/user/${id}`)

        return body
    } catch (e) {
        return {
            success: false,
            message: 'Erro: ' + e,
            response: {},
        }
    }
}

const getTimelines = async () => {
    try {
        const body = await get(`timeline`);
        return body;
    } catch (e) {
        return {
            success: false,
            message: 'Erro: ' + e,
            response: {},
        };
    }
}

const deleteTimeline = async (id) => {
    try {
        const body = await del(`timeline/${id}`)

        if (!body.success) {
            throw body
        }

        return body
    } catch (e) {
        return e
    }
}

export { getTimeline, getTimelineByUser, getTimelines, deleteTimeline }