import React, {Component} from 'react';
import {connect} from 'react-redux';

class NoteCardContainer extends Component {
    
    render() {
        return (
            <div>specific notecards</div>
        )
    }
}

export default connect()(NoteCardContainer)