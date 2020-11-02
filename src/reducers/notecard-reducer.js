function notecardReducer(state = {notes: [], subjects: [], loading: false}, action) {
    switch (action.type) {
        case "ADD_NOTE":
            return {
                ...state,
                notes: state.notes.concat(action.note),
                loading: false
            }
        case "LOAD_NOTES":
            return {
                ...state,
                notes: [...state.notes],
                loading: true
            }
        case "ADD_NOTES":
            return {
                ...state,
                notes: action.notes,
                loading: false
            }
        case "ADD_SUBJECT":
            return {
                ...state,
                subjects: state.subjects.concat(action.subject),
                loading: false
            }
        case "LOAD_SUBJECTS":
            return {
                ...state,
                subjects: [...state.subjects],
                loading: true
            }
        case "ADD_SUBJECTS":
            return {
                ...state,
                subjects: action.subjects,
                loading: false
            }
        default: 
            return state;
    }
}

export default notecardReducer