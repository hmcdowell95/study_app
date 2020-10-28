import React, {Component} from 'react';
import {connect} from 'redux';
import {Link} from 'react-router-dom';

class SubjectContainer extends Component {

    render() {
        return(
            <div>list of subjects with links</div>
        )
    }
}

export default connect()(SubjectContainer)