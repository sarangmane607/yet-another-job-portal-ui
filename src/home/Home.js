import React, { Component } from 'react';
import JobOpenings from "./../components/JobOpenings/JobOpenings";
import './Home.css';

class Home extends Component {
    render() {
        return (
            <div className="home-container">
                <div style={{textAlign: "center"}}>
                    <h1>Welcome to Yet Another Job Portal</h1>
                    <h4>Demo site buld for Telstra</h4>
                </div>
                <h4>Current Job Openings : </h4>
                <JobOpenings/>
            </div>
            
        )
    }
}

export default Home;