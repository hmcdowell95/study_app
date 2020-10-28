import React, {Component} from 'react';
import NoteCardContainer from '../containers/notecard-container';

class Subject extends Component {
    render() {
        return(
            <div>
                <NoteCardContainer />
                {/* put props in container */}
            </div>
        )
    }
}

export default Subject