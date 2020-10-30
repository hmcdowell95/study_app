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
            let sub = {
                id: cuid(),
                name: action.subject.name
            }
            return {
                ...state,
                subjects: [...state.subjects, sub],
                loading: false
            }
        default: 
            return state;
    }
}

export default notecardReducer