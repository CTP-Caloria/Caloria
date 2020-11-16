import React from 'react';
import { Button } from 'react-bootstrap';
import auth from '../services/auth';
import { Redirect } from 'react-router-dom';

const axios = require('axios');

const formValid = ({ ...rest }) => {
    let valid = true;

    // check to see if form fields are empty
    Object.values(rest).forEach(val => {

        if (val === "")
            valid = false;
    });
    return valid
};

class CreatePage extends React.Component {
  state = {
    recipeName: "",
    ingredients: "",
    servingSize: "",
    units: "",
  }

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    console.log(name, value);

    this.setState({
        [name]: value
    }, () => console.log(this.state));

    // console.log(this.state);
  }

  handleSubmit = (e) => {
    e.preventDefault();

    if (auth.isAuthenticated) {
        if (formValid(this.state)) {

            axios({
                method: 'post',
                url: 'http://localhost:8080/api/myRecipes/create',
                headers: {
                    "Access-Control-Allow-Origin": "*"
                },

                data: {
                    recipeName: this.state.recipeName,
                    ingredients: this.state.ingredients,
                    servingSize: this.state.servingSize,
                    units: this.state.units
                }
            })

            console.log(`
                --SUBMITTING--
                Recipe Name: ${this.state.recipeName}
                Ingredients: ${this.state.ingredients}
                Serving Size: ${this.state.servingSize}
                Units: ${this.state.units}
        `   );
        } else {
            console.error(`FORM INVALID - DISPLAY ERROR MESSAGE`);
        }
        <Redirect to="/profile" />
    } else {
        alert("Please log in to use this feature!");
    }
}

  // savePost = (event) => {
  //   fetch("/api/posts/", {
  //     method: 'POST',
  //     credentials: 'include',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({content: this.state.content}),
  //   })
  //     .then(res => {
  //       if(res.ok) {
  //         return res.json()
  //       }

  //       throw new Error('Content validation');
  //     })
  //     .then(post => {
  //       this.setState({
  //         success: true,
  //       });
  //     })
  //     .catch(err => {
  //       this.setState({
  //         error: true,
  //       });
  //     });
  // }

  render() {
    if (auth.isAuthenticated) {
      console.log("Authenticated: " + auth.userID);
    } else {
        console.log("Not logged in");
    }

    return (
      <div className="form">
        <div className="form-group row">
          <label className="form-label" htmlFor="recipeName">Recipe Name</label>
          <input type="text" className="form-control mt-1" id="recipeName" onChange={this.handleChange}/>
        </div>

        <div className="row">
          <div className="form-group col">
            <label className="form-label" htmlFor="ingredients">Ingredients</label>
            <input type="text" className="form-control mt-1" id="ingredients" onChange={this.handleChange}/>
          </div>
          <div className="form-group col">
            <label className="form-label" htmlFor="amount">Amount</label>
            <input type="number" min="0" className="form-control mt-1" id="amount" onChange={this.handleChange}/>
          </div>
          <div className="form-group col">
            <label className="form-label" htmlFor="unit">Unit</label>
            <select className="form-control mt-1" onChange={this.handleChange.bind(this)}>
              <option selected disabled hidden>Choose one</option>
              <option>Cups</option>
              <option>Grams</option>
              <option>Ounces</option>
              <option>Teaspoons</option>
              <option>Tablespoons</option>
            </select>
          </div>
        </div>
          
        <div className="form-group row">
          <label className="form-label" htmlFor="instructions">Instructions</label>
          <input type="text" className="form-control mt-1" id="instructions" onChange={this.handleChange}/>
        </div>

        <div className="form-group row">
          <Button className="col-2 ml-auto" variant="secondary" onClick={() => this.props.history.goBack()}>
            Cancel
          </Button>

          <Button className="col-2 ml-2" variant="primary" type="submit" onClick={this.handleSubmit}>
            Submit
          </Button>
        </div>
      </div>
    );
  }
} 

export default CreatePage;