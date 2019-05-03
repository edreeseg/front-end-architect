//React
import React from 'react';
import ReactDOM from 'react-dom';

//Redux
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducers';

//CSS Reset
import './index.css';

//Components
import App from './App';

//reactstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//dummy starter reducer
// function reducer () {
//     state: {}
// }

//Redux Dev Tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
