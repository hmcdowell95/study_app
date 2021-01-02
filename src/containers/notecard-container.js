import React, {Component} from 'react';
import {connect} from 'react-redux';
import NoteCardInput from '../components/notecard/notecard-input';
import NoteCard from '../components/notecard/notecard';
import { addNote} from '../actions/subject-action';
import ReverseCard from '../components/notecard/reverse-notecard';

class NoteCardContainer extends Component {

    state = {s: true}

    renderNotes = () => {
        let notes = this.props.notecards.filter(n => n.subject_id === this.props.subjectId);
        return notes.map(n => <NoteCard key={n.id} note={n} router={this.props.router} /> )
    }
    // add reverse render
    renderReverse = () => {
        let notes = this.props.notecards.filter(n => n.subject_id === this.props.subjectId);
        return notes.map(n => <ReverseCard key={n.id} note={n} router={this.props.router}/>)
    }

    r = (s) => {
        if (s) {this.setState({s: false})} else {this.setState({s: true})}
    }

    render() {
        return (
            <div><button onClick={() => this.r(this.state.s)}>Switch</button>
            <div class="grid">
                <NoteCardInput add={this.props.addNote} subjectId={this.props.subjectId} />
                {this.state.s ? this.renderNotes() : this.renderReverse()}
            </div>
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