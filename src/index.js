import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import { BrowserRouter as Router } from 'react-router-dom';

import {Provider} from "react-redux";
import { createStore, combineReducers, applyMiddleware } from 'redux';
import LoginReducer from './store/LoginReducer';
import JobOpeningsReducer from './components/JobOpenings/reducer/JobOpeningsReducer';
import ViewApplicationReduceer from './components/UserApplications/reducer/ViewApplicationReduceer';
import LoggerWare from './middlewares/LoggerWare';
import LoginWare from './middlewares/LoginWare';
import JobOpeningsWare from './components/JobOpenings/middleware/JobOpeningsWare';
import ViewApplicationWare from './components/UserApplications/middleware/ViewApplicationWare';

const finalCombinedReducer = combineReducers({LoginReducer, JobOpeningsReducer, ViewApplicationReduceer});
const store = createStore(finalCombinedReducer,
    applyMiddleware(LoggerWare, LoginWare, JobOpeningsWare, ViewApplicationWare)
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
