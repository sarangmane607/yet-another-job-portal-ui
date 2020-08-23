import { request } from "./../../../util/APIUtils"
import { API_BASE_URL } from '../../../constants';
import Alert from 'react-s-alert';

const JobOpeningsWare = store => next => action => {
    console.log('JobOpeningsWare dispatching', action, store.getState());
    let result = null;
    if (action.type === "GET_ACTIVE_JOB_OPENINGS") {
        let requestPromise = request({
            url: API_BASE_URL + "/jobopenings/getall",
            method: 'GET',
        });
        requestPromise
            .then(response => {
                console.log(response);
                action.type = "GET_ACTIVE_JOB_OPENINGS.OK";
                action.payload = response;
                result = next(action);
            }).catch(error => {
                Alert.error((error && error.message) || 'Oops! Something went wrong while loading job openings');
            });
    } else if (action.type === "APPLY_FOR_JOB") {
        let requestPromise = request({
            url: API_BASE_URL + "/application/apply/" + action.payload.jobOpeningId,
            method: 'POST',
        });
        requestPromise
            .then(response => {
                console.log(response);
                if(response.requestStatus === "success"){
                    Alert.success("Applied successfully!");
                    action.type = "APPLY_FOR_JOB.OK";
                    action.payload = response.userJobApplication;
                    result = next(action);
                }else{
                    Alert.error(response.errorMessage);
                }
            }).catch(error => {
                Alert.error((error && error.message) || 'Oops! Something went wrong while Applying for job');
            });
    } else {
        result = next(action);
    }
    console.log('JobOpeningsWare next state', result, store.getState());
    return result
}

export default JobOpeningsWare;