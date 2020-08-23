const initialState = {
    jobApplications : []
}

const ViewApplicationReduceer = (state = initialState, action) => {
    console.log("ViewApplicationReduceer", JSON.parse(JSON.stringify(state)), JSON.parse(JSON.stringify(action)));
    let newState = state;
    if (action.type === "FETCH_USER_APPLICATIONS.OK") {
        newState = {
            ...state,
            jobApplications: action.payload
        };
    }
    console.log("ViewApplicationReduceer newState", JSON.parse(JSON.stringify(newState)));
    return newState;
}


export default ViewApplicationReduceer;