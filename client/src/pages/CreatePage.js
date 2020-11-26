import React from 'react';
import { Button } from 'react-bootstrap';
import auth from '../services/auth';
import { Redirect } from 'react-router-dom';
import { BsX } from 'react-icons/bs';

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
    instructions: [{ steps: "" }],
    totalCalories: 0,
    // to hold tempoary values to be passed once "row" is complete
    tempInstruction: "",
    tempIngredient: "",
    tempServingSize: "",
    tempUnits: "",
    redirect: false,
  }

  addInstruction = () => {
    this.setState(prevState => ({
      instructions: [...prevState.instructions, { steps: "" }]
    }))
  }

  removeInstruction(i) {
    let instructions = [...this.state.instructions];
    instructions.splice(i, 1);
    this.setState({ instructions });
  }

  instructionInput() {
    let input;
    return this.state.instructions.map((x, i) => (
      <div className="row align-items-center" key={i}>
        <div className="form-group col">
          <input
            type="text"
            className="form-control mt-1"
            id="steps"
            // value={x.steps}

            onChange={this.instructionChange.bind(this)}
          //{this.handleInstructionsChange.bind(i, this)}
          />
        </div>
        <button className="btn btn-primary mb-4" value="add" onClick={this.handleInstructionsChange.bind(this, i, this.state.tempInstruction)}>Add instructions</button>
        {/* <button className="btn btn-secondary mb-4" value="add" onClick={this.addInstruction.bind(this)}>+</button>  */}
        <button className="btn btn-danger mb-4" value="remove" onClick={this.removeInstruction.bind(this, i)}>X</button>
        {/* <span className="col" type="button" value="remove" onClick={this.removeInstruction.bind(this, i)}><BsX /></span> */}
      </div>
    ))
  }
  instructionChange = (e) => {
    console.log(e.target.value);

    this.setState({
      tempInstruction: e.target.value
    })
  }

  handleInstructionsChange = (i, input) => {

    // const { name, value } = e.target;
    //  const value=input;
    console.log(i);
    console.log(input);



    let instructions = [...this.state.instructions];
    instructions[i] = { ...instructions[i], [i]: input };

    this.setState({
      instructions,
      // tempInstruction: "",
    }, () => console.log(this.state));

    console.log(this.state);

  }

  addIngredient = () => {
    this.setState(prevState => ({
      ingredients: [...prevState.ingredients, { food: "", }]
    }))
  }

  removeIngredient(i) {
    let ingredients = [...this.state.ingredients];
    ingredients.splice(i, 1);
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
            // value={x.food}
            onChange={this.ingredientChange.bind(this)}
          // {this.handleIngredientsChange.bind(this, i)}
          />
        </div>
        <div className="form-group col">
          <label className="form-label" htmlFor="servingSize">Serving Size</label>
          <input
            type="number"
            min="0"
            className="form-control mt-1"
            id="servingSize"
            // value={x.servingSize} 
            onChange={this.ingredientChange.bind(this)} />
        </div>
        <div className="form-group col">
          <label className="form-label" htmlFor="unit">Unit</label>
          <select
            className="form-control mt-1"
            // value={x.units}
            onChange={this.ingredientChange.bind(this)}
          >
            <option selected disabled hidden>Choose one</option>
            <option>Serving</option>
            <option>Cups</option>
            <option>Grams</option>
            <option>Ounces</option>
            <option>Teaspoons</option>
            <option>Tablespoons</option>
          </select>
        </div>
        <button className="btn btn-primary mb-4" value="add" onClick={this.handleIngredientsChange.bind(this, i)}>Add Ingredient</button>
        <button className="btn btn-danger mb-4" value="remove" onClick={this.removeIngredient.bind(this, i)}>X</button>
        {/* <span className="col" type="button" value="remove" onClick={this.removeIngredient.bind(this, i)}><BsX />X</span> */}
      </div>
    ))
  }
  ingredientChange = (e) => {
    //console.log(e.target.id);
    let tempIngredient = this.state.tempIngredient;
    let tempServingSize = this.state.tempServingSize;
    let tempUnits = this.state.tempUnits;
    if (e.target.id === "food") {
      tempIngredient = e.target.value;
    } else if (e.target.id === "servingSize") {
      tempServingSize = e.target.value;
    } else {
      tempUnits = e.target.value;
    }
    console.log("Ingredient: " + tempIngredient);
    console.log("Serving Size: " + tempServingSize);
    console.log("Units: " + tempUnits);
    


    this.setState({
      tempIngredient: tempIngredient,
      tempServingSize: tempServingSize,
      tempUnits: tempUnits,

    })
  }

  handleChangeName = (e) => {
    e.preventDefault();
    this.setState({
      recipeName: e.target.value
    })
  }
  handleIngredientsChange = (i, e) => {
    e.preventDefault();
    // console.log(i);
    // console.log(this.state.tempIngredient);
    let food = this.state.tempIngredient;
    let servingSize = this.state.tempServingSize;
    let units = this.state.tempUnits;

    let ingredients = [...this.state.ingredients];
    ingredients[i] = { ...ingredients[i], food, servingSize, units };
    
    
    let amount = servingSize + " " + units;


    axios({
      method: 'get',
      url: `https://api.edamam.com/api/nutrition-data?app_id=a13b07cb&app_key=16baabeb65d884657c730df6ce3a525f&ingr=" + ${amount} + " " + ${food}`,
      headers: {
        "Access-Control-Allow-Origin": "*"
      },


    }).then(calories => {
      console.log(calories.data);
      let totalCalories = this.state.totalCalories + parseInt(calories.data.calories);
      this.setState({
        totalCalories: totalCalories
      })
    })

    this.setState({
      ingredients,
      // tempIngredient:"",
      // tempServingSize: "",
      // tempUnits: "",
    }, () => console.log(this.state));

    console.log(this.state);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({redirect: true});

    if (auth.isAuthenticated) {
      let instructions = "";
      let i = 0;
      this.state.instructions.forEach((instruction => {
        console.log(instruction);
        instructions += (instruction[i] + ",")
        i++;
      }))

      let ingredients = "";
      let amount = "";
      let food = ""
      let totalCalories = 0;
      this.state.ingredients.forEach((ingredient => {
        // console.log(ingredient.food);
        food = ingredient.food;
        amount = ingredient.servingSize + " " + ingredient.units;
        ingredients += (amount + " of " + food + ",")

      }))

      console.log(ingredients);
      console.log(instructions);
      if (formValid(this.state)) {



        axios({
          method: 'post',
          url: 'http://localhost:8080/api/myRecipes/create',
          headers: {
            "Access-Control-Allow-Origin": "*"
          },

          data: {
            name: this.state.recipeName,
            totalCalories: this.state.totalCalories,
            servingSize: 1.0,
            unit: "Serving",
            instructions: instructions,
            // this.state.instructions,
            ingredients: ingredients,
            // "ingredients",
            //this.state.ingredients,
            requesterID: auth.userID,
            // name: ,
            // totalCalories
            // ingredients: this.state.ingredients,
            // servingSize: this.state.servingSize,
            // units: this.state.units
          }
        })

        console.log(`
                --SUBMITTING--
                Recipe Name: ${this.state.recipeName}
                Ingredients: ${this.state.ingredients}
                Serving Size: ${this.state.servingSize}
                Units: ${this.state.units}
                Calories: ${this.state.totalCalories}
        `   );
        
      } else {
        console.error(`FORM INVALID - DISPLAY ERROR MESSAGE`);
      }
     
    } else {
      alert("Please log in to use this feature!");
    }
  }

  render() {
    const {from } = this.props.location.state|| {from: {pathname:'/profile'}};
    const {redirect} = this.state;
    if(redirect) {
      return <Redirect to ={from}/>
    }
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
            onChange={this.handleChangeName} />
        </div>

        <div className="row h6">Ingredients</div>
        {this.ingredientInput()}
        <button className="btn btn-secondary mb-4" value="add" onClick={this.addIngredient.bind(this)}>+</button>

        <div className="form-group row h6">Instructions</div>
        {this.instructionInput()}
        <inline><button className="btn btn-secondary mb-4" value="add" onClick={this.addInstruction.bind(this)}>+</button></inline>

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