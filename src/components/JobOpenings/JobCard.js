import React, { Component } from 'react';
import { connect } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import './JobCard.css';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        width: "300px",
        maxHeight: "300px",
        height: "300px",
        float: "left",
        margin: "10px",
        cursor: "pointer"
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

function JobCard(props) {
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    console.log("props: ", props);
    const classes = useStyles();
    let buttonText = "Login to Apply";
    let isButtonDisabled = true;
    if(props.authenticated){
        buttonText = "Apply";
        isButtonDisabled = false;
        if(props.isApplied){
            buttonText = "Applied";
            isButtonDisabled = true;
        }
    }
    return (
        <React.Fragment>
            <Card className={classes.root} onClick={handleClickOpen} title="View details">
                <CardContent>
                    <Typography variant="h5" component="h2">
                        {props.jobDetail.title}
                    </Typography>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        {props.jobDetail.jobDescription}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        Experience : {props.jobDetail.minExperienceInYears != null ? props.jobDetail.minExperienceInYears : "0"} - {props.jobDetail.maxExperienceInYears != null ? props.jobDetail.maxExperienceInYears : "0"}
                    </Typography>
                    <Typography variant="body2" component="p">
                        {props.jobDetail.skills != null && props.jobDetail.skills.length > 0 &&
                            <span>Skills :<br /></span>
                        }
                        {props.jobDetail.skills != null &&
                            props.jobDetail.skills.map(skill => {
                                return <span>&nbsp;&nbsp;- {skill.skillDescription} <br /></span>
                            })
                        }
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" variant="contained" color="primary" style={{ textTransform: "none" }} {...(isButtonDisabled && { disabled: true })}
                        onClick={(event) => {
                            event.stopPropagation();
                            props.applyForJob(props.jobDetail.jobOpeningId);
                        }}
                    >
                        {buttonText}
                    </Button>
                </CardActions>
            </Card>
            <Dialog
                fullWidth={true}
                maxWidth={'sm'}
                open={open}
                onClose={handleClose}
                aria-labelledby="max-width-dialog-title">
                <DialogTitle id="max-width-dialog-title">{props.jobDetail.title}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {props.jobDetail.jobDescription}
                        <br />
                        Experience : {props.jobDetail.minExperienceInYears != null ? props.jobDetail.minExperienceInYears : "0"} - {props.jobDetail.maxExperienceInYears != null ? props.jobDetail.maxExperienceInYears : "0"} in Years
                        <br />
                        CTC : {props.jobDetail.minOfferingCTC != null ? props.jobDetail.minOfferingCTC : "0"} - {props.jobDetail.maxOfferingCTC != null ? props.jobDetail.maxOfferingCTC : "0"} in Lacs
                        <br />
                        Location : {props.jobDetail.location}
                        <br />
                        Employment : {props.jobDetail.employmentType == "fulltime" ? "Full time" : "Part Time"}

                        <br />
                        {props.jobDetail.skills != null && props.jobDetail.skills.length > 0 &&
                            <span>Skills :<br /></span>
                        }
                        {props.jobDetail.skills != null &&
                            props.jobDetail.skills.map(skill => {
                                return <span>&nbsp;&nbsp;- {skill.skillDescription} <br /></span>
                            })
                        }
                        <br />
                        Posted on : {props.jobDetail.createdOn}
                        <br />
                        Last Date to apply : {props.jobDetail.validTill}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Close
          </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}

const mapStateToProps = (state, ownProps) => {
    console.log("JobCard mapStateToProps", state, ownProps);

    let isApplied = false;
    if(state.JobOpeningsReducer.appliedJobs != null){

        let job = state.JobOpeningsReducer.appliedJobs.find(
            appliedJob => appliedJob.jobApplicationId.jobOpeningId === ownProps.jobDetail.jobOpeningId
        );
        isApplied = job != null;
    }
    if(!isApplied && state.LoginReducer.currentUser){
        let job = state.LoginReducer.currentUser.userApplications.find(
            appliedJob => appliedJob.jobApplicationId.jobOpeningId === ownProps.jobDetail.jobOpeningId
        );
        isApplied = job != null;
    }

    let newState = {
        authenticated: state.LoginReducer.authenticated,
        isApplied : isApplied
    };
    return newState;
}

const mapDispactchToProps = (dispatch) => {
    return {
        applyForJob: (jobOpeningId) => {
            dispatch({ type: "APPLY_FOR_JOB", payload: { jobOpeningId } });
        }
    }
}

export default connect(mapStateToProps, mapDispactchToProps)(JobCard);