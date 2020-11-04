import React, {Component} from 'react';
import {connect} from 'react-redux';
import NoteCardInput from '../components/notecard/notecard-input';
import NoteCard from '../components/notecard/notecard';
import { addNote} from '../actions/subject-action';
import {Route} from 'react-router-dom';
import EditNoteCard from '../components/notecard/edit-notecard';

class NoteCardContainer extends Component {

    renderNotes = () => {
        let notes = this.props.notecards.filter(n => n.subject_id === this.props.subjectId);
        return notes.map(n => <NoteCard key={n.id} note={n} router={this.props.router} /> )
    }
    
    render() {
        return (
            <div class="grid">
                <Route exact path={this.props.router} render={() => <NoteCardInput add={this.props.addNote} subjectId={this.props.subjectId} />} />
                <Route exact path='/notecards/:id/edit' render={<EditNoteCard notes={this.props.notecards} />} />
                <Route exact path={this.props.router}>{this.renderNotes()}</Route>
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