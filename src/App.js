import React, {Component} from 'react';
import SubjectContainer from './containers/subject-container';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import About from './components/about';
import {connect} from 'react-redux';
import NoteCards from './components/notecard/notecards';

class App extends Component {


  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" render={() => <h1>Welcome to my NoteCard Studying App!</h1>} />
          <Route exact path="/" render={() => <NavLink to="/subjects">Start!</NavLink>} />
          <Route exact path="/about" render={() => <About/>} />
          <Route path='/subjects' render={routerProps => <SubjectContainer {...routerProps} />} />
          <Route path='/notecards' render={() => <NoteCards notes={this.props.notes} /> } />
        </div>
      </Router>
    )
  }
}

const mapStateToProps = state => {
  return {notes: state.notes}
}

export default connect(mapStateToProps)(App);
