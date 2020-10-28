function notecardReducer(state = {notes: [], loading: false}, action) {
    switch (action.type) {
        case "ADD_NOTE":
            return {
                ...state,
                notes: [...state.notes, action.note],
                loading: false
            }
        default: 
            return state;
    }
}

export default notecardReducer