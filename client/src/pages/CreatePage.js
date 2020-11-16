import React from 'react';
import { Button } from 'react-bootstrap';
import auth from '../services/auth';
import { Redirect } from 'react-router-dom';
import { BsPlus, BsX } from 'react-icons/bs';

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
    ingredients: [{ food: "", servingSize: "", units: "" }],
    instructions: [{ steps: "" }]
  }

  addInstruction = () => {
    this.setState(prevState => ({
      instructions: [...prevState.instructions, { steps: "" }]
    }))
  }

  removeInstruction(i) {
    let instructions = [...this.state.instructions];
    instructions.splice(i,1);
    this.setState({ instructions });
  }

  instructionInput() {
    return this.state.instructions.map((x, i) => (
      <div className="row align-items-center" key={i}>
        <div className="form-group col">
          <input 
            type="text" 
            className="form-control mt-1" 
            id="steps" 
            value={x.steps}
            onChange={this.handleInstructionsChange.bind(this, i)}/>
        </div>
        <span className="col" type="button" value="remove" onClick={this.removeInstruction.bind(this, i)}><BsX /></span>
      </div>
    ))
  }

  handleInstructionsChange = (i, e) => {
    e.preventDefault();
    const { name, value } = e.target;
    console.log(name, value);

    let instructions = [...this.state.instructions];
    instructions[i] = {...instructions[i], [name]: value};

    this.setState({
        instructions
    }, () => console.log(this.state));

    // console.log(this.state);
  }

  addIngredient = () => {
    this.setState(prevState => ({
      ingredients: [...prevState.ingredients, { food: "",  }]
    }))
  }

  removeIngredient(i) {
    let ingredients = [...this.state.ingredients];
    ingredients.splice(i,1);
    this.setState({ ingredients });
  }

  ingredientInput() {
    return this.state.ingredients.map((x, i) => (
      <div className="row align-items-center" key={i}>
        <div className="form-group col">
          <label className="form-label" htmlFor="food">Food</label>
          <input 
            type="text" 
            className="form-control mt-1" 
            id="food" 
            value={x.food}
            onChange={this.handleIngredientsChange.bind(this, i)}/>
        </div>
        <div className="form-group col">
          <label className="form-label" htmlFor="servingSize">Serving Size</label>
          <input 
            type="number" 
            min="0" 
            className="form-control mt-1" 
            id="servingSize"
            value={x.servingSize} 
            onChange={this.handleIngredientsChange.bind(this, i)}/>
        </div>
        <div className="form-group col">
          <label className="form-label" htmlFor="unit">Unit</label>
          <select 
            className="form-control mt-1" 
            value={x.units}
            onChange={this.handleIngredientsChange.bind(this, i)}
          >
            <option selected disabled hidden>Choose one</option>
            <option>Cups</option>
            <option>Grams</option>
            <option>Ounces</option>
            <option>Teaspoons</option>
            <option>Tablespoons</option>
          </select>
        </div>
        <span className="col" type="button" value="remove" onClick={this.removeIngredient.bind(this, i)}><BsX /></span>
      </div>
    ))
  }

  handleIngredientsChange = (i, e) => {
    e.preventDefault();
    const { name, value } = e.target;
    console.log(name, value);

    let ingredients = [...this.state.ingredients];
    ingredients[i] = {...ingredients[i], [name]: value};

    this.setState({
        ingredients
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

  render() {
    if (auth.isAuthenticated) {
      console.log("Authenticated: " + auth.userID);
    } else {
        console.log("Not logged in");
    }

    return (
      <div className="form w-50">
        <h5 className="display-4 mt-3 mb-4 text-center">Create your recipe</h5>
        <div className="form-group row mb-4">
          <label className="form-label h6" htmlFor="recipeName">Recipe Name</label>
          <input 
            type="text" 
            className="form-control mt-1" 
            id="recipeName" 
            placeholder="e.g. Banana bread"
            onChange={this.handleIngredientsChange}/>
        </div>

        <div className="row h6">Ingredients</div>
        {this.ingredientInput()}
        <button className="btn btn-secondary mb-4" value="add" onClick={this.addIngredient.bind(this)}>Add ingredients</button>
          
        <div className="form-group row h6">Instructions</div>
        {this.instructionInput()}
        <button className="btn btn-secondary mb-4" value="add" onClick={this.addInstruction.bind(this)}>Add instructions</button>  
          
        <div className="form-group row">
          <label className="form-label h6" htmlFor="recipe-pic">Choose a picture for your recipe: </label>
          <input
            className="form-control mt-1 border-0" 
            type="file"
            id="recipe-pic" name="recipe-pic"
            accept="image/png, image/jpeg" />
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