import React from 'react';
import { withRouter, Link } from 'react-router-dom';

import auth from '../services/auth';

const classes = "btn btn-outline-secondary";

const AuthButton = withRouter(({ history }) => {
  if(!auth.isAuthenticated) {
    return <Link className={classes} to="/login">Login</Link>;
  }

  const logout = () => {
    auth.signout().then(() => history.push('/'));
  }

  return (
    <button className={classes} onClick={logout}>Logout</button>
  );
});

export default AuthButton;