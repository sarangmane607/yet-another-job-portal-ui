import { request } from "./../../../util/APIUtils"
import { API_BASE_URL } from '../../../constants';
import Alert from 'react-s-alert';

const ViewApplicationWare = store => next => action => {
    console.log('ViewApplicationWare dispatching', action, store.getState());
    let result = null;
    if (action.type === "FETCH_USER_APPLICATIONS") {
        let requestPromise = request({
            url: API_BASE_URL + "/application/getall",
            method: 'GET',
        });
        requestPromise
            .then(response => {
                console.log(response);
                let history = action.payload.history;
                action.type = "FETCH_USER_APPLICATIONS.OK";
                action.payload = response.applications;
                result = next(action);
                history.push('/viewApplications');
            }).catch(error => {
                Alert.error((error && error.message) || 'Oops! Something went wrong while loading job openings');
            });
    } else {
        result = next(action);
    }
    console.log('ViewApplicationWare next state', result, store.getState());
    return result
}

export default ViewApplicationWare;