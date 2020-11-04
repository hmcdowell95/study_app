import React, {Component} from 'react';

class NoteCard extends Component {
    render() {
        return(
            <div>
                {this.props.note.term}
            </div>
        )
    }
}

export default NoteCard