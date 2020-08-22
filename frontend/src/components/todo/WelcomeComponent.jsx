import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import HelloWorldService from '../../api/todo/HelloWorldService';

class WelcomeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      welcomeMessage: '',
    };
  }

  render() {
    return (
      <>
        <h1>Welcome</h1>
        <div className="container">
          Welcomegalletas {this.props.match.params.name}. You can manage your
          todos <Link to="/todos">here</Link>.
        </div>
        <div className="container">
          Click here to customized welcome message.
          <button
            onClick={this.retrieveWelcomeMessage}
            className="btn btn-success"
          >
            Get Welcome
          </button>
        </div>

        <div className="container">{this.state.welcomeMessage}</div>
      </>
    );
  }

  retrieveWelcomeMessage = () => {
    /*     HelloWorldService.executeHelloWorldServie().then((res) =>
      this.handleSucessfulResponse(res),
    );

    HelloWorldService.executeHelloWorldBeanServie().then((res) =>
      this.handleSucessfulResponse(res),
    ); */

    HelloWorldService.executeHelloWorldPathVariableServie(
      this.props.match.params.name,
    )
      .then((res) => this.handleSucessfulResponse(res))
      .catch((error) => this.handleErrorResponse(error));
  };

  handleSucessfulResponse = (res) => {
    this.setState({ welcomeMessage: res.data.message });
  };

  handleErrorResponse = (error) => {
    let errorMessage = '';
    if (error.message) {
      errorMessage += error.message;
    }

    if (error.response && error.response.data) {
      errorMessage += error.response.data.message;
    }
    this.setState({ welcomeMessage: errorMessage });
  };
}

export default WelcomeComponent;
