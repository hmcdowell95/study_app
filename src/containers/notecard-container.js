import React, {Component} from 'react';
import {connect} from 'react-redux';
import NoteCardInput from '../components/notecard/notecard-input';
import NoteCard from '../components/notecard/notecard';
import { addNote} from '../actions/subject-action';

class NoteCardContainer extends Component {

    renderNotes = () => {
        let notes = this.props.notecards.filter(n => n.subject_id === this.props.subjectId);
        return notes.map(n => <NoteCard key={n.id} note={n} router={this.props.router} /> )
    }
    
    render() {
        return (
            <div class="grid">
                <NoteCardInput add={this.props.addNote} subjectId={this.props.subjectId} />
                {this.renderNotes()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {notecards: state.notes}
}

const mapDispatchToProps = d => ({
    addNote: data => d(addNote(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(NoteCardContainer)