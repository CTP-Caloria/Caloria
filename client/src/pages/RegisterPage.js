import React from 'react';

class RegisterPage extends React.Component {
    state = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        password2: ""
    }

    submit = (e) => {

    }

    render() {
        return (
            <form onSubmit={this.submit}>
                {/* { err } */}
                <div className="form-group">
                    <label for="firstName">First name</label>
                    <input 
                        type="text"
                        className="form-control"
                        name="firstName"
                        placeholder="First name"
                        // value={this.state.email} 
                        // onChange={this.fieldChanged('email')} 
                    />
                </div>
                <div className="form-group">
                    <label for="lastName">Last name</label>
                    <input 
                        type="text"
                        className="form-control"
                        name="lastName"
                        placeholder="Last name"
                        // value={this.state.email} 
                        // onChange={this.fieldChanged('email')} 
                    />
                </div>
                <div className="form-group">
                    <label for="email">Email</label>
                    <input 
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="Email"
                        // value={this.state.email} 
                        // onChange={this.fieldChanged('email')} 
                    />
                </div>
                <div className="form-group">
                    <label for="password">Password</label>
                    <input 
                        type="password"
                        className="form-control"
                        name="password"
                        placeholder="Password"
                        // value={this.state.email} 
                        // onChange={this.fieldChanged('email')} 
                    />
                </div>
                <div className="form-group">
                    <label for="password">Confirm password</label>
                    <input 
                        type="password"
                        className="form-control"
                        name="password2"
                        placeholder="Password"
                        // value={this.state.email} 
                        // onChange={this.fieldChanged('email')} 
                    />
                </div>
            
                <button 
                    type="submit"
                    className="btn btn-primary ml-auto"
                >Login</button>
            </form>
        );
    }
}

export default RegisterPage;