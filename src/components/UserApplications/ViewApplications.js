import React from 'react';
import { connect } from 'react-redux';
import './ViewApplications.css';


function ViewApplications(props) {
    return (
        <div style={{ paddingLeft: "30px" }}>
            <br />
            <br />
            {props.jobApplications != null && props.jobApplications.length > 0 &&
                <h4>Jobs Applied :</h4>
            }
            {props.jobApplications != null && props.jobApplications.length > 0 &&
                props.jobApplications.map(job => {
                    return (
                        <div className="job-card">
                            <h3>{job.title}</h3>
                            <h5>{job.jobDescription}</h5>
                            <h5>Status : {job.status}</h5>
                        </div>
                    )
                })
            }
            {(!props.jobApplications === null || props.jobApplications.length === 0) &&
                <h4>You have not applied for any Jobs yet. </h4>
            }
        </div>
    );
}

const mapStateToProps = (state, ownProps) => {
    console.log("ViewApplications mapStateToProps", state, ownProps);
    let newState = {
        jobApplications: state.ViewApplicationReduceer.jobApplications
    };
    return newState;
}

const mapDispactchToProps = (dispatch) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispactchToProps)(ViewApplications);