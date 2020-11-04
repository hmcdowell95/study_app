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
        case "EDIT_SUBJECT":
            let x = state.subjects.filter(s => s.id !== action.subject.id);
            return {
                ...state,
                subjects: x.concat(action.subject),
                loading: false
            }
        case "DELETE_SUBJECT":
            return {
                ...state,
                subjects: state.subjects.filter(s => s.id !== action.subject),
                loading: false
            }
        case "DELETE_NOTE":
            return {
                ...state,
                notes: state.notes.filter(n => n.id !== action.note),
                loading: false
            }
        default: 
            return state;
    }
}

export default notecardReducer