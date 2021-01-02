const BASE_URL = "http://localhost:3000";

export function fetchSubjects() {
    return (dispatch) => {
      dispatch({ type: 'LOAD_SUBJECTS' });
      fetch('http://localhost:3000/subjects')
        .then(response => response.json())
        .then(subjects => dispatch({ type: 'ADD_SUBJECTS', subjects: subjects }));
    }
}
  
export function addSubject(data) {
    return (dispatch) => {
        dispatch({type: "LOAD_SUBJECTS"});
        const config = {method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(data)
        };
        fetch(`${BASE_URL}/subjects`, config)
        .then(r => r.json())
        .then(json => dispatch({type: 'ADD_SUBJECT', subject: json}));
    }
}

export function fetchNotes() {
    return (dispatch) => {
        dispatch({type: "LOAD_NOTES"})
        fetch(`${BASE_URL}/notecards`)
        .then(r => r.json())
        .then(notes => dispatch({type: "ADD_NOTES", notes: notes}))
    }
}

export function addNote(data) {
    return (dispatch) => {
        dispatch({type: "LOAD_NOTES"});
        const config = {method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(data)
        };
        fetch(`${BASE_URL}/notecards`, config)
        .then(r => r.json())
        .then(json => dispatch({type: 'ADD_NOTE', note: json}));
    }
}

export function updateSubject(data) {
    return (dispatch) => {
        dispatch({type: 'LOAD_SUBJECTS'});
        const config = {method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(data)
        };
        fetch(`${BASE_URL}/subjects/${data.id}`, config)
        .then(r => r.json())
        .then(json => dispatch({type: 'EDIT_SUBJECT', subject: json}))
    }
}

export function deleteSubject(data) {
    return (dispatch) => {
        dispatch({type: 'LOAD_SUBJECTS'});
        const config = {method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        };
        fetch(`${BASE_URL}/subjects/${data}`, config)
        .then(() => dispatch({type: "DELETE_SUBJECT", subject: data}))
    }
}

export function deleteNote(data) {
    return (dispatch) => {
        dispatch({type: 'LOAD_NOTES'});
        const config = {method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        };
        fetch(`${BASE_URL}/notecards/${data}`, config)
        .then(() => dispatch({type: "DELETE_NOTE", note: data}))
    }
}

export function editNote(data) {
    return (dispatch) => {
        dispatch({type: 'LOAD_NOTES'});
        const config ={method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(data)
        };
        fetch(`${BASE_URL}/notecards/${data.id}`, config)
        .then(r => r.json())
        .then(json => dispatch({type: "EDIT_NOTE", note: json}))
    }
}