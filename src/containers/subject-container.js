import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Route} from 'react-router-dom';
import SubjectInput from '../components/subject/subject-input';
import Subject from '../components/subject/subject';
import {Link} from 'react-router-dom';
import {addSubject, fetchSubjects, fetchNotes, updateSubject} from '../actions/subject-action';
import {NavLink} from 'react-router-dom';
import EditSubject from '../components/subject/edit-subject';

class SubjectContainer extends Component {

    componentDidMount() {
        this.props.fetchSubjects();
        this.props.fetchNotes()
    };

renderSubjects = () => {return this.props.subjects.map(s => 
    <p><Link key={s.id} to={`/subjects/${s.id}`}>{s.name}</Link></p>)};

    render() {
        return(
            <div><NavLink style={{margin: "10px"}} to="/">Home</NavLink>
                <NavLink style={{margin: '10px'}} to="/subjects">Subjects</NavLink><br/>
                <Route exact path={this.props.match.url} render={() => <div><SubjectInput add={this.props.addSubject} /><br/>
                Subjects: <br/>{this.renderSubjects()}</div>} />
                <Route exact path={`${this.props.match.url}/:id`} 
                render={routerProps => <Subject {...routerProps} subjects={this.props.subjects} /> } />
                <Route exact path={`${this.props.match.url}/:id/edit`}
                render={routerProps => <EditSubject {...routerProps} edit={this.props.updateSubject} />} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {subjects: state.subjects}
}

const mapDispatchToProps = d => ({
    addSubject: data => d(addSubject(data)),
    fetchSubjects: () => d(fetchSubjects()),
    fetchNotes: () => d(fetchNotes()),
    updateSubject: data => d(updateSubject(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(SubjectContainer)