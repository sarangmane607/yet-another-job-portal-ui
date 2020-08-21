import { login, getCurrentUser } from "./../util/APIUtils";
import { ACCESS_TOKEN } from './../constants';
import Alert from 'react-s-alert';

const LoginWare = store => next => action => {
    console.log('LoginWare dispatching', action, store.getState());
    let result = null;
    if (action.type === "LOCAL_LOGIN") {
        const loginRequest = Object.assign({}, action.payload);
        console.log("LOCAL_LOGIN:", loginRequest);
        login(loginRequest)
            .then(response => {
                if (response.accessToken != null) {
                    localStorage.setItem(ACCESS_TOKEN, response.accessToken);
                    Alert.success("You're successfully logged in!");
                    getCurrentUser()
                        .then(response_cu => {
                            console.log("user/me", response_cu);
                            action.type = "LOGIN_SUCCESS";
                            action.payload = response_cu;
                            result = next(action);
                        }).catch(error => {
                            Alert.error((error && error.message) || 'Oops! Something went wrong. Please try again!');
                        });

                } else {
                    Alert.error('Oops! Something went wrong. Please try again!');
                }
            }).catch(error => {
                Alert.error((error && error.message) || 'Oops! Something went wrong. Please try again!');
            });
    } else if (action.type === "GET_CURRENT_USER") {
        getCurrentUser()
            .then(response_cu => {
                console.log("user/me", response_cu);
                action.type = "GET_CURRENT_USER_REC";
                action.payload = response_cu;
                result = next(action);
            }).catch(error => {
                //no need to handle error
            });
    } else if (action.type === "LOG_OUT") {
        localStorage.removeItem(ACCESS_TOKEN);
        Alert.success("You Are Logged Out!");
        result = next(action);
    } else {
        result = next(action);
    }
    console.log('LoginWare next state', store.getState());
    return result
}

export default LoginWare;