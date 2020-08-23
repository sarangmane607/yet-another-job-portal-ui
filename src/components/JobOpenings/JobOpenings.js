import React from 'react';
import { connect } from 'react-redux';
import JobCard from './JobCard';

function JobOpenings(props) {
    console.log("props.jobs", props.jobs);
    return (
        <div>
            {props.jobs != null &&
                props.jobs.map(jobDetail => {
                    return <JobCard jobDetail={jobDetail} />;
                })
            }
            {props.jobs == null &&
                <h5>No </h5>
            }
        </div>
    );
}


const mapStateToProps = (state, b) => {
    console.log("JobOpenings mapStateToProps", state);
    let newState = {
        jobs: state.JobOpeningsReducer.jobOpenings.jobs
    };
    if (newState.jobs != null && state.JobOpeningsReducer.appliedJobs != null) {
        newState.jobs.map(jobDetail => {
            let isApplied = state.JobOpeningsReducer.appliedJobs.find(
                appliedJob => appliedJob.jobApplicationId.jobOpeningId === jobDetail.jobOpeningId
            );
            jobDetail.isApplied = isApplied != null;
            return null;
        })
    }
    console.log("JobOpenings newState", newState);
    return newState;
}


export default connect(mapStateToProps, null)(JobOpenings);