import React, { Component } from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';
import AppHeader from '../common/AppHeader';
import Home from '../home/Home';
import Login from '../user/login/Login';
import Signup from '../user/signup/Signup';
import Profile from '../user/profile/Profile';
import OAuth2RedirectHandler from '../user/oauth2/OAuth2RedirectHandler';
import NotFound from '../common/NotFound';
import LoadingIndicator from '../common/LoadingIndicator';
import PrivateRoute from '../common/PrivateRoute';
import Alert from 'react-s-alert';
import { connect } from 'react-redux';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';
import './App.css';

class App extends Component {

  componentDidMount() {
    this.props.getCurrentUser();
  }

  render() {
    if (this.props.loading) {
      return <LoadingIndicator />
    }
    console.log("in App", this.props.authenticated, this.props.currentUser);
    return (
      <div className="app">
        <div className="app-top-box">
          <AppHeader authenticated={this.props.authenticated} onLogout={this.props.logOut} />
        </div>
        <div className="app-body">
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <PrivateRoute path="/profile" authenticated={this.props.authenticated} currentUser={this.props.currentUser}
              component={Profile}></PrivateRoute>
            <Route path="/login"
              render={(props) => <Login authenticated={this.props.authenticated} {...props} />}></Route>
            <Route path="/signup"
              render={(props) => <Signup authenticated={this.props.authenticated} {...props} />}></Route>
            <Route path="/oauth2/redirect" component={OAuth2RedirectHandler}></Route>
            <Route component={NotFound}></Route>
          </Switch>
        </div>
        <Alert stack={{ limit: 3 }}
          timeout={3000}
          position='top-right' effect='slide' offset={65} />
      </div>
    );
  }
}


const mapStateToProps = (state, b) => {
  console.log("App.js mapStateToProps", state, b);
  return {
    authenticated: state.LoginReducer.authenticated,
    currentUser: state.LoginReducer.currentUser,
    loading: state.LoginReducer.loading
  };
}

const mapDispactchToProps = (dispatch) => {
  return {
    getCurrentUser: () => {
      dispatch({ type: "GET_CURRENT_USER", payload: null });
    },
    logOut: () => {
      dispatch({ type: "LOG_OUT", payload: null });
    }
  }
}

export default connect(mapStateToProps, mapDispactchToProps)(App);

