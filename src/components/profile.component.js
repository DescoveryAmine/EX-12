import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import { validate } from "../actions/auth";


class Profile extends Component {


  constructor(props) {
    super(props);
    this.handleValidation = this.handleValidation.bind(this);
 
    this.state = {
 
      successful: false,

    };
  }

  handleValidation(e) {

    const { user: currentUser ,message } = this.props;

    this.setState({
      successful: true,
    });

    if (1) {

      this.props
      .dispatch(
          validate(currentUser.userId.toString())
        )
        .then(() => {
          this.setState({
            successful: false,
          });
        })
        .catch(() => {
          this.setState({
            successful: false,
          });
        });
    }
  }

  render() {

    const { user: currentUser ,message } = this.props;
  

    if (!currentUser) {
      return <Redirect to="/login" />;
    }

    return (
      <div className="container">
        <header className="jumbotron">
          <h3>
            <strong>{currentUser.name}</strong> Profile
          </h3>
        </header>
        <p>
          <strong>Id:</strong> {currentUser.userId}
        </p>
        <p>
          <strong>Name:</strong> {currentUser.name}
        </p>
        <p>
          <strong>LastName:</strong> {currentUser.lastname}
        </p>
        <p>
          <strong>Email:</strong> {currentUser.email}
        </p>
        <p>
          <strong>validated:</strong> {currentUser.validated}
        </p>
        <p>
          <strong>bearer_token:</strong> {currentUser.bearer_token}
        </p>
        <p>
          <strong>validation_date:</strong> {currentUser.validation_date}
        </p>

        <div className="form-group">
              <button
                className="btn btn-primary btn-block"
                disabled={this.state.successful}
                onClick={this.handleValidation}
              >
                {this.state.successful && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                <span>Validate</span>
              </button>
            </div>
            <div className="form-group">
              <button
                className="btn btn-primary btn-block"
                disabled={/*this.state.loading*/false}
              >
                {/*this.state.loading*/ false && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                <span>GetAuth</span>
              </button>
            </div>

            {message && (
              <div className="form-group">
                <div className={ this.state.successful ? "alert alert-success" : "alert alert-danger" } role="alert">
                  {message}
                </div>
              </div>
            )}

      </div>
      
    );
  }
}

function mapStateToProps(state) {
  const { user } = state.auth;
  const { message } = state.message;
  return {
    user,
    message
  };
}

export default connect(mapStateToProps)(Profile);
