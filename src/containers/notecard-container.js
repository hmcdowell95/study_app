import React, {Component} from 'react';
import {connect} from 'react-redux';
import NoteCardInput from '../components/notecard-input';
import NoteCard from '../components/notecard';

class NoteCardContainer extends Component {

    renderNotes = () => {
        let notes = this.props.notecards.filter(n => n.subjectId === this.props.subjectId);
        return notes.map(n => <NoteCard note={n} /> )
    }
    
    render() {
        return (
            <div>
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
    addNote: data => d({type: "ADD_NOTE", note: data})
})

export default connect(mapStateToProps, mapDispatchToProps)(NoteCardContainer)