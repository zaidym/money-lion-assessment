const formReducer = (state = {}, action) => {
    switch (action.type) {
        case 'STEP_1':   // Personal Details
            return {
                ...state,
                profileInfo: action.payload
            }
        case 'STEP_2':  // DOB
            return {
                ...state,
                dob: action.payload
            }
        default:
            return state
    }
}


export default formReducer