import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Route} from 'react-router-dom';
import SubjectInput from '../components/subject-input';
import Subject from '../components/subject';
import {Link} from 'react-router-dom';
import {addSubject, fetchSubjects} from '../actions/subject-action';
import {NavLink} from 'react-router-dom';

class SubjectContainer extends Component {

    componentDidMount() {
        this.props.fetchSubjects()
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
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {subjects: state.subjects,
    loading: state.loading}
}

const mapDispatchToProps = d => ({
    addSubject: data => d(addSubject(data)),
    fetchSubjects: () => d(fetchSubjects())
})

export default connect(mapStateToProps, mapDispatchToProps)(SubjectContainer)