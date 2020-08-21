const initialState = {
    authenticated: false,
    currentUser: null,
    loading: false
}

const LoginReducer = (state = initialState, action) => {
    console.log("LoginReducer", state, action);
    if (action.type === "LOGIN_SUCCESS" || action.type === "GET_CURRENT_USER_REC") {
        let newState = {
            ...state,
            authenticated: true,
            currentUser: action.payload
        };
        console.log("newState", newState);
        return newState;
    } else if (action.type === "LOG_OUT") {
        let newState = {
            ...state,
            authenticated: false,
            currentUser: null
        };
        console.log("newState logout", newState);
        return newState;
    } else {
        return state;
    }
}


export default LoginReducer;