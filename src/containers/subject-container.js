import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Route} from 'react-router-dom';
import SubjectInput from '../components/subject-input';
import {Link} from 'react-router-dom';

class SubjectContainer extends Component {

    render() {
        return(
            <div>list of subjects with links. {JSON.stringify(this.props.subjects)}
                <SubjectInput />
                <Route exact path={this.props.match.url} render={() => <div>test</div>} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {subjects: state.subjects}
}

const mapDispatchToProps = d => {
    addSubject: data => d({type: "ADD_SUBJECT", subject: data})
}

export default connect(mapStateToProps, mapDispatchToProps)(SubjectContainer)