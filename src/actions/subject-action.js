const BASE_URL = "http://localhost:3000";

export function fetchSubjects() {
    return (dispatch) => {
      dispatch({ type: 'LOAD_SUBJECTS' });
      fetch('http://localhost:3000/subjects')
        .then(response => response.json())
        .then(subjects => dispatch({ type: 'ADD_SUBJECTS', subjects: subjects }));
    };
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