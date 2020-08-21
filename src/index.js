import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import { BrowserRouter as Router } from 'react-router-dom';

import {Provider} from "react-redux";
import { createStore, combineReducers, applyMiddleware } from 'redux';
import LoginReducer from './store/LoginReducer';
import LoggerWare from './middlewares/LoggerWare';
import LoginWare from './middlewares/LoginWare';

const finalCombinedReducer = combineReducers({LoginReducer});
const store = createStore(finalCombinedReducer,
    applyMiddleware(LoggerWare, LoginWare)
);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>, 
    document.getElementById('root')
);

//registerServiceWorker();
