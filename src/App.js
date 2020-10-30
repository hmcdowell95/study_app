import React, {Component} from 'react';
import SubjectContainer from './containers/subject-container';
import {BrowserRouter as Router, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" render={() => <h1>Welcome to my NoteCard Studying App!</h1>} />
          <Route path='/subjects' render={routerProps => <SubjectContainer {...routerProps} />} />
        </div>
      </Router>
    )
  }
}

export default App;
