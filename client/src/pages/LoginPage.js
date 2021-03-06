// import { token } from 'morgan';
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
  
      }).catch((err) => {
        this.setState({ failed: true });
      });
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    const { redirectToReferrer, failed } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from}/>
    }

    let err = "";
    if (failed) {
      err = <div className="alert alert-danger center" role="alert">Login failed.</div>;
    }

    return (
      <div>
        <div id="background" />
        <div className="wrapper">
        
          <form onSubmit={this.login} className="form-wrapper p-5">
            { err }
            <h2 className="text-center">Login</h2>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                    type="email"
                    className="form-control"
                    name="email"
                    value={this.state.email} 
                    onChange={this.fieldChanged('email')} 
                />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
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
              className="btn btn-success"
            >Login</button>
          </form>
        </div>
      </div>
      
    );
  }
}

export default LoginPage;