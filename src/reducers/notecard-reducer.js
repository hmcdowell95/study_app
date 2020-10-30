import uuid from 'uuid';

function notecardReducer(state = {notes: [], subjects: [], loading: false}, action) {
    switch (action.type) {
        case "ADD_NOTE":
            let note = Object.assign({id: uuid()}, action.note)
            return {
                ...state,
                notes: [...state.notes, note],
                loading: false
            }
        case "ADD_SUBJECT":
            let sub = {
                id: uuid(),
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