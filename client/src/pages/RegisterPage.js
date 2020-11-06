import React from 'react';

// email check char
const emailRegex = RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

// checks if the field has any errors
const formValid= ({formErrors, ...rest}) => {
    let valid=true;
    // check to see if there are any errors with the form
    Object.values(formErrors).forEach(val=> {
        val.length>0 &&(valid=false);
    });

    // check to see if form fields are empty
    Object.values(rest).forEach(val=>{
        
        if(val === "") 
            valid=false;
    });
    return valid
};
class RegisterPage extends React.Component {
     constructor(props){
         super(props)
         this.state = {
             firstName: "",
             lastName: "",
             email: "",
             password: "",
             //password2: "",

             formErrors:{
                 firstName: "",
                 lastName: "",
                 email: "",
                 password: "",
             }
         }

     }

    handleSubmit = (e) => {
        e.preventDefault();

        if(formValid(this.state)){
            console.log(`
            --SUBMITTING--
            First Name: ${this.state.firstName}
            Last Name: ${this.state.lastName}
            Email: ${this.state.email}
            Password: ${this.state.password}
           
            `);
        } else{
            console.error( `FROM INVALID -DISPLAY ERROR MESSAGE`);
        }
    }

    handleChange = e =>{
        e.preventDefault();
        const {name,value} = e.target;
        let formErrors = this.state.formErrors;

      

        switch(name){

            case 'firstName':
                formErrors.firstName=value.length< 2 
                ?"minimum 2 characters required"
                :"";
            break;

            case 'lastName':
                formErrors.lastName = value.length < 2
                    ? "minimum 2 characters required"
                    : "";
                break;

            case 'email':
                formErrors.email = emailRegex.test(value) 
                    ? ""
                    : "Invalid email address";
                break;

            case 'password':
                formErrors.password = value.length < 6 
                    ? "minimum 2 characters required"
                    : "";
                break;
            
            default:
                break;

        }
        this.setState({
            formErrors,[name]:value
        },()=>console.log(this.state));

    }

    render() {
        const {formErrors}=this.state;
        return (

    
            <div className="wrapper">
                <div className="form-wrapper">
                    <h1>Create Account</h1>
                    <form onSubmit={this.handleSubmit}>
                        {/* { err } */}
                        <div className="firstName">
                            <label for="firstName">First name</label>
                            <input
                                type="text"
                                className={formErrors.firstName.length > 0 ? "error" : null}
                                name="firstName"
                                placeholder="First name"
                                noValidate
                                onChange={this.handleChange}
                            />
                            {formErrors.firstName.length > 0 && (
                                <span className="errorMessage">{formErrors.firstName}</span>
                            )}
                        </div>
                        <div className="lastName">
                            <label for="lastName">Last name</label>
                            <input
                                type="text"
                                className={formErrors.lastName.length > 0 ? "error" : null}
                                name="lastName"
                                placeholder="Last name"
                                noValidate
                                onChange={this.handleChange}
                            />
                            {formErrors.lastName.length > 0 && (
                                <span className="errorMessage">{formErrors.lastName}</span>
                            )}

                        </div>
                        <div className="email">
                            <label for="email">Email</label>
                            <input
                                type="email"
                                className={formErrors.email.length > 0 ? "error" : null} name="email"
                                placeholder="Email"
                                noValidate
                                onChange={this.handleChange}
                            />
                            {formErrors.email.length > 0 && (
                                <span className="errorMessage">{formErrors.email}</span>
                            )}
                        </div>
                        <div className="password">
                            <label for="password">Password</label>
                            <input
                                type="password"
                                className={formErrors.password.length > 0 ? "error" : null} name="password"
                                placeholder="Password"
                                noValidate
                                onChange={this.handleChange}
                            />
                            {formErrors.password.length > 0 && (
                                <span className="errorMessage">{formErrors.password}</span>
                            )}
                        </div>
                        {/* <div className="form-group">
                    <label for="password">Confirm password</label>
                    <input
                        type="password"
                        className="form-control"
                        name="password2"
                        placeholder="Password"
                        noValidate
                        onChange={this.handleChange}
                    />
                </div> */}
                    <div className="createAccount">
                    <button type="submit">Create Account</button>
                    <small>Already have an account?</small>

                    </div>
                        
                    </form>

                </div>
            </div>
    
        );
    }
}

export default RegisterPage;
