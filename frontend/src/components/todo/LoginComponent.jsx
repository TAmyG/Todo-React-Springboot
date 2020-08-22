import React, { Component } from 'react';
import AuthenticationService from './AuthenticationService.js';

class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'username',
      password: '',
      hasLoginFailed: false,
      showSuccessMessage: false,
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  loginClicked = () => {
    /*  if (this.state.username === 'username' && this.state.password === '123') {
      AuthenticationService.registerSuccesfullLogin(
        this.state.username,
        this.state.password,
      );
      this.props.history.push(`/welcome/${this.state.username}`);
      this.setState({ showSuccessMessage: true });
        this.setState({ hasLoginFailed: false });
    } else {
      this.setState({ hasLoginFailed: true });
      this.setState({ showSuccessMessage: false });
    } */

    /*  AuthenticationService.executeBasicAuthentication(
      this.state.username,
      this.state.password,
    )
      .then((res) => {
        console.log(res);
        AuthenticationService.registerSuccesfullLogin(
          this.state.username,
          this.state.password,
        );
        this.props.history.push(`/welcome/${this.state.username}`);
      })
      .catch((error) => {
        this.setState({ hasLoginFailed: true });
        this.setState({ showSuccessMessage: false });
      }); */

    AuthenticationService.executeJwtAuthentication(
      this.state.username,
      this.state.password,
    )
      .then((res) => {
        console.log(res);
        AuthenticationService.registerSuccesfullLoginForJwt(
          this.state.username,
          res.data.token,
        );
        this.props.history.push(`/welcome/${this.state.username}`);
      })
      .catch((error) => {
        this.setState({ hasLoginFailed: true });
        this.setState({ showSuccessMessage: false });
      });
  };

  render() {
    return (
      <div>
        <h1>LoginComponent</h1>
        <div className="container">
          {this.state.hasLoginFailed && (
            <div className="alert alert-warning">Invalid Credentials</div>
          )}
          {this.state.showSuccessMessage && <div>Login Succesful</div>}
          User Name:{' '}
          <input
            type="text"
            name="username"
            defaultValue={this.state.username}
            onChange={this.handleChange}
          />
          Password:{' '}
          <input
            type="password"
            name="password"
            defaultValue={this.state.password}
            onChange={this.handleChange}
          />
          <button className="btn btn-success" onClick={this.loginClicked}>
            Login
          </button>
        </div>
      </div>
    );
  }
}

export default LoginComponent;
