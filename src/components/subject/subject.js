import React from 'react';
import NoteCardContainer from '../../containers/notecard-container';
import {Link} from 'react-router-dom';

const Subject = (props) => {
    const renderSubject = props.subjects.find(x => x.id === parseInt(props.match.params.id));
    const id = parseInt(props.match.params.id);
    return(
        <div>
            <h2>{renderSubject ? renderSubject.name: null}</h2>
            <Link to={`/subjects/${id}/edit`}>EDIT Subject</Link>
            <NoteCardContainer subjectId={id} router={props.match.url} />
        </div>
    )
}


export default Subject