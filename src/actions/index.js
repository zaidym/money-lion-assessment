export const storeProfileInfo = (payload) => {
    return {
        type: 'STEP_1',
        payload: payload
    }
}

export const storeDobInfo = (payload) => {
    return {
        type: 'STEP_2',
        payload: payload
    }
}

export const clearStore = (payload) => {
    return {
        type: 'CLEAR_STORE',
    }
}