import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import './index.css';
import App from './container/App';
import rootReducer from './reducers';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware)),
);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
