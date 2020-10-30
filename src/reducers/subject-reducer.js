

function subjectReducer(state = {subjects: [], loading: false}, action) {
    switch (action.type) {
        case "ADD_SUBJECT":
            let sub = {

            }
            return {
                ...state,
                subjects: [...state.subjects, action.subject],
                loading: false
            }
        default:
            return state;
    }
}

export default subjectReducer