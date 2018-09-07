import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import allReducers from './reducers';
import {Provider} from 'react-redux';

const store = createStore(allReducers, applyMiddleware(ReduxPromise));


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
