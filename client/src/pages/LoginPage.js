import { token } from 'morgan';
import React from 'react';
import { Redirect } from 'react-router-dom';

import auth from '../services/auth';

class LoginPage extends React.Component {
  state = {
    redirectToReferrer: false,
    failed: false, 
    email: "",
    password: "",
  }

  fieldChanged = (name) => {
    return (event) => {
      let { value } = event.target;
      this.setState({ [name]: value });
    }
  }

  login = (e) => {
    e.preventDefault();
    let { email, password } = this.state;
    auth.authenticate(email, password)
      .then((user) => {
        this.setState({ redirectToReferrer: true });
        console.log(token.decode);
      }).catch((err) => {
        this.setState({ failed: true });
      });
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    const { redirectToReferrer, failed } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    let err = "";
    if (failed) {
      err = <div className="alert alert-danger center" role="alert">Login failed.</div>;
    }

    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h2>LOGIN</h2>
        <form onSubmit={this.login}>
            { err }
            <div className="form-group">
                <label for="email">Email</label>
                <input 
                    type="email"
                    className="form-control"
                    name="email"
                    value={this.state.email} 
                    onChange={this.fieldChanged('email')} 
                />
            </div>
            <div className="form-group">
                <label for="password">Password</label>
                <input 
                    type="password"
                    className="form-control"
                    name="password" 
                    value={this.state.password} 
                    onChange={this.fieldChanged('password')} 
                />
            </div>
        
            <button 
                type="submit"
                // className="btn btn-primary ml-auto"
              className="createAccount"
            >Login</button>
        </form>
        </div>
      </div>
    );
  }
}

export default LoginPage;