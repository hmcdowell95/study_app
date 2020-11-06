import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Route, Link} from 'react-router-dom';
import SubjectInput from '../components/subject/subject-input';
import Subject from '../components/subject/subject';
import {addSubject, fetchSubjects, fetchNotes, updateSubject, deleteSubject, editNote, deleteNote} from '../actions/subject-action';
import EditSubject from '../components/subject/edit-subject';
import EditNoteCard from '../components/notecard/edit-notecard';
import NavBar from '../containers/NavBar';

class SubjectContainer extends Component {

    componentDidMount() {
        this.props.fetchSubjects();
        this.props.fetchNotes()
    };

renderSubjects = () => {return this.props.subjects.map(s => 
    <p><Link key={s.id} to={`/subjects/${s.id}`}>{s.name}</Link></p>)};

    render() {
        return(
            <div><NavBar/>
                <Route exact path={this.props.match.url} render={() => <div><SubjectInput add={this.props.addSubject} /><br/>
                Subjects: <br/>{this.renderSubjects()}</div>} />
                <Route exact path={`${this.props.match.url}/:id`} 
                render={routerProps => <Subject {...routerProps} subjects={this.props.subjects} /> } />
                <Route exact path={`${this.props.match.url}/:id/edit`}
                render={routerProps => <EditSubject {...routerProps} 
                subjects={this.props.subjects} 
                notes={this.props.notes}
                edit={this.props.updateSubject} 
                delete={this.props.deleteSubject} />} />
                <Route exact path={`${this.props.match.url}/notecards/:id/edit`} render={routerProps => 
                <EditNoteCard {...routerProps} notes={this.props.notes} edit={this.props.editNote} delete={this.props.deleteNote} />} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return state
}

const mapDispatchToProps = d => ({
    addSubject: data => d(addSubject(data)),
    fetchSubjects: () => d(fetchSubjects()),
    fetchNotes: () => d(fetchNotes()),
    updateSubject: data => d(updateSubject(data)),
    deleteSubject: data => d(deleteSubject(data)),
    editNote: data => d(editNote(data)),
    deleteNote: data => d(deleteNote(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(SubjectContainer)