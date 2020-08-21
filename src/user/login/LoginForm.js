import React, { Component } from 'react';
import { ACCESS_TOKEN } from '../../constants';
import { login } from '../../util/APIUtils';
import Alert from 'react-s-alert';
import {connect} from 'react-redux';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleInputChange(event) {
        const target = event.target;
        const inputName = target.name;
        const inputValue = target.value;
        this.setState({
            [inputName]: inputValue
        });
    }
    handleSubmit(event) {
        event.preventDefault();
        const loginRequest = Object.assign({}, this.state);
        login(loginRequest)
            .then(response => {
                localStorage.setItem(ACCESS_TOKEN, response.accessToken);
                Alert.success("You're successfully logged in!");
                this.props.history.push("/");
            }).catch(error => {
                Alert.error((error && error.message) || 'Oops! Something went wrong. Please try again!');
            });
    }
    render() {
        return (<form onSubmit={(event) => this.props.localLogin(event, this.state)}>
            <div className="form-item">
                <input type="email" name="email" className="form-control" placeholder="Email" value={this.state.email} onChange={this.handleInputChange} required />
            </div>
            <div className="form-item">
                <input type="password" name="password" className="form-control" placeholder="Password" value={this.state.password} onChange={this.handleInputChange} required />
            </div>
            <div className="form-item">
                <button type="submit" className="btn btn-block btn-primary">Login</button>
            </div>
        </form>);
    }
}

const mapDispactchToProps = (dispatch) => {
    return {
        localLogin: (event, state) => {
            console.log("event, state ", event, state);
            event.preventDefault();
            dispatch({type:"LOCAL_LOGIN", payload : state});
      }
    }
  }
  
export default connect(null, mapDispactchToProps)(LoginForm);