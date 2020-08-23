const initialState = {
    jobOpenings : {"jobs": []}
}

const JobOpeningsReducer = (state = initialState, action) => {
    console.log("JobOpeningsReducer", JSON.parse(JSON.stringify(state)), JSON.parse(JSON.stringify(action)));
    let newState = state;
    if (action.type === "GET_ACTIVE_JOB_OPENINGS.OK") {
        newState = {
            ...state,
            jobOpenings: action.payload
        };
    } else if (action.type === "APPLY_FOR_JOB.OK"){
        let appliedJobs = (state.appliedJobs != null ? state.appliedJobs : []);
        appliedJobs = JSON.parse(JSON.stringify(appliedJobs));
        appliedJobs.push(action.payload);
        newState = {
            ...state,
            appliedJobs
        };
    }
    console.log("JobOpeningsReducer newState", JSON.parse(JSON.stringify(newState)));
    return newState;
}


export default JobOpeningsReducer;