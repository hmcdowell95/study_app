import React, {Component} from 'react';
import NoteCardContainer from '../containers/notecard-container';

class Subject extends Component {
    render() {
        return(
            <div>
                <h2>{this.props.subjects.find(s => s.id === this.props.match.params.id).name}</h2>
                <NoteCardContainer subjectId={this.props.match.params.id} />
            </div>
        )
    }
}

export default Subject