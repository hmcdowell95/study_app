import React, {Component} from 'react';
import NoteCardContainer from '../containers/notecard-container';

class Subject extends Component {

    renderSubject = () => {return this.props.subjects.find(x => x.id === parseInt(this.props.match.params.id))}

    render() {
        return(
            <div>
                <h2>{this.renderSubject().name}</h2>
                <NoteCardContainer subjectId={this.props.match.params.id} />
            </div>
        )
    }
}

export default Subject