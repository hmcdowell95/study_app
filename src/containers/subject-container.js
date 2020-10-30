import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Route} from 'react-router-dom';
import {Link} from 'react-router-dom';

class SubjectContainer extends Component {

    render() {
        return(
            <div>list of subjects with links
                <Route exact path={this.props.match.url} render={() => <div>test</div>} />
            </div>
        )
    }
}

export default connect()(SubjectContainer)