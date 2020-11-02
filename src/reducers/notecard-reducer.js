import cuid from 'cuid';

function notecardReducer(state = {notes: [], subjects: [], loading: false}, action) {
    switch (action.type) {
        case "ADD_NOTE":
            let note = Object.assign({id: cuid()}, action.note)
            return {
                ...state,
                notes: [...state.notes, note],
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