import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ViewApplications.css';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        overflow: 'hidden',
        padding: theme.spacing(0, 3),
    },
    paper: {
        maxWidth: 400,
        margin: `${theme.spacing(1)}px auto`,
        padding: theme.spacing(2),
    },
}));

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
            {!props.jobApplications == null || props.jobApplications.length == 0 &&
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