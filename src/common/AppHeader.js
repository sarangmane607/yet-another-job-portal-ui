import React, { Component } from 'react';
import { withRouter } from "react-router";
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './AppHeader.css';

class AppHeader extends Component {
    render() {
        return (
            <header className="app-header">
                <div className="container">
                    <nav className="app-nav">
                        <div className="app-options" style={{ float: "left" }}>
                            <ul>
                                <li>
                                    <NavLink to="/">Home</NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="app-options">
                            {this.props.authenticated ? (
                                <ul>
                                    <li>
                                        <a onClick={this.props.viewApplications}>My Applications</a>
                                    </li>
                                    <li>
                                        <NavLink to="/profile">Profile</NavLink>
                                    </li>
                                    <li>
                                        <a onClick={this.props.onLogout}>Logout</a>
                                    </li>
                                </ul>
                            ) : (
                                    <ul>
                                        <li>
                                            <NavLink to="/login">Login</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/signup">Signup</NavLink>
                                        </li>
                                    </ul>
                                )}
                        </div>
                    </nav>
                </div>
            </header>
        )
    }
}

const mapDispactchToProps = (dispatch, ownProps) => {
    return {
        viewApplications: () => {
            dispatch({ type: "FETCH_USER_APPLICATIONS", payload: ownProps });
        }
    }
}

export default withRouter(connect(null, mapDispactchToProps)(AppHeader));