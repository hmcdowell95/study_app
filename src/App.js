import React, {Component} from 'react';
import SubjectContainer from './containers/subject-container';
import {BrowserRouter as Router, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path='/subjects' render={() => <SubjectContainer/>} />
        </div>
      </Router>
    )
  }
}

export default App;
