const stateCharacter = {
    characters: [],
}

function sellcartReducer(state = stateCharacter, action) {
    switch (action.type) {
        case 'ADD_CHARACTER':
            return { ...state, characters: [action.payload, ...state.characters] }

        case 'EMPTY_CART':
            return { ...state, characters: [] }

        default:
            return state
    }
}

export default sellcartReducer