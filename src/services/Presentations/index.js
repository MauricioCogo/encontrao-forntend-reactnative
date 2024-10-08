import { get, put, del } from '../index'

const getPresentation = async (id) => {

    try {
        const body = await get(`presentations/${id}`)

        console.warn("get id: ", body);

        return body
    } catch (e) {
        return {
            success: false,
            message: 'Erro: ' + e,
            response: {},
        }
    }
}

const getPresentations = async () => {
    try {
        const body = await get(`presentations`)

        if (!body.success) {
            throw body.message
        }

        return body.res
    } catch (e) {
        return {
            success: false,
            message: 'Erro: ' + e,
            response: {},
        }
    }
}

const getPresentationsWithCampus = async () => {
    try {
        const body = await get(`presentations/campus/`)

        return body
    } catch (e) {
        return {
            success: false,
            message: 'Erro: ' + e,
            response: {},
        }
    }
}

const deletePresentation = async (id) => {
    try {
        const body = await del(`presentations/delete/${id}`)

        if (!body.success) {
            throw body
        }

        return body
    } catch (e) {
        return e
    }
}

export { getPresentation, getPresentations, getPresentationsWithCampus, deletePresentation }