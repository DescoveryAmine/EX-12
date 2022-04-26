import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";

class Profile extends Component {

  render() {
    const { user: currentUser } = this.props;

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
                disabled={/*this.state.loading*/false}
              >
                {/*this.state.loading*/ false && (
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

      </div>
      
    );
  }
}

function mapStateToProps(state) {
  const { user } = state.auth;
  return {
    user,
  };
}

export default connect(mapStateToProps)(Profile);
