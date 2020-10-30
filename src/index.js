import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import notecardReducer from './reducers/notecard-reducer';
import subjectReducer from './reducers/subject-reducer';

const rootReducer = combineReducers({
  subjects: subjectReducer,
  notecards: notecardReducer
});

let store = createStore(rootReducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);