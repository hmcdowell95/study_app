import React, {Component} from 'react';
import NoteCardContainer from '../../containers/notecard-container';
import {Link} from 'react-router-dom';

class Subject extends Component {

    renderSubject = () => {return this.props.subjects.find(x => x.id === parseInt(this.props.match.params.id))}

    render() {
        const id = parseInt(this.props.match.params.id)
        return(
            <div>
                <h2>{this.renderSubject() ? this.renderSubject().name: null}</h2>
                <Link to={`/subjects/${id}/edit`}>EDIT Subject</Link>
                <NoteCardContainer subjectId={id} router={this.props.match.url} />
            </div>
        )
    }
}

export default Subject