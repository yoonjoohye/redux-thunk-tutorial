import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import {indexReducer} from './reducers';
import {App} from './App';


const store = createStore(
    indexReducer,
    composeWithDevTools(applyMiddleware(ReduxThunk))
);

function Store() {
  return (
      <Provider store={store}>
        <App />
      </Provider>
  );
}

export default Store;
