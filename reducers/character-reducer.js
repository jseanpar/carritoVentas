function characterReducer(state = {}, action) {
    switch (action.type) {

        case 'SET_CHARACTER_LIST': {
            return { ...state, ...action.payload }
        }

        default:
            return state
    }
}

export default characterReducer