import React from 'react';
import auth from '../services/auth';
import { Modal } from 'react-bootstrap';
const axios = require('axios');


function DisplayMeal(props) {
  return (
    <div className="card my-3 box col-sm-3 mx-3">
      <div className="card-body">
        <div className="row">
          <h5 className="card-title"><strong>{props.meal.name}</strong></h5>
          <p><strong>Calories:</strong> {props.meal.totalCalories}</p>
        </div>
        <div className="row">
          <button 
            type="button" 
            className="btn btn-secondary text-light col"
            onClick={ e => props.display(props.index) }  
          >
            View
          </button>
        </div>

      </div>
    </div>
  );
}

class Profile extends React.Component {

  state = {
    title: "",
    info: "",
    img: [],
    firstName: "",
    lastName: "",
    email: "",
    name: "",
    description: "",
    content: [],
    show: false,
    servingSize:0,
    foodName: "",
    calories: 0,
    instructions: [],
    ingredients: [],
  }

  handleClose = () => {
    this.setState({
      show: false,
    })
  }

  handleShow = (index) => {

    let foodName = this.state.content[index].name;
    let instructions = this.state.content[index].instructions.split(",");
    let ingredients = this.state.content[index].ingredients.split(",");
    let calories = this.state.content[index].totalCalories;
    let servingSize = this.state.content[index].servingSize;
 
    
    this.setState({
      
      foodName: foodName,
      instructions: instructions,
      ingredients: ingredients,
      calories: calories,
      servingSize: servingSize,
      show: true,

    })
    console.log(this.state.index);
  }

  componentDidMount() {
    if (auth.isAuthenticated) {
      let id = auth.userID;
      axios({
        method: 'get',
        url: `/api/profiles/${id}`,
        headers: {
          "Access-Control-Allow-Origin": "*"
        },
        data: {
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          email: this.state.email,
          description: this.state.description,
          name: this.state.name
        }
      })
        .then(getReq => {
          console.log(getReq.data);
          this.setState({
            firstName: getReq.data.firstName,
            lastName: getReq.data.lastName,
            email: getReq.data.email,
            name: getReq.data.name,
            description: getReq.data.description,
          })
        })
        .then(() => {
          axios({
            method: 'get',
            url: `/api/myRecipes/getRecipe/${id}`,
            hearder: {
              "Access-Control-Allow-Origin": "*"
            },
            data: {
              name: this.state.name,
              description: this.state.description,
            }
          })
            .then(getReq => {
              console.log(getReq.data);
              console.log(getReq);
              this.setState({
                content: getReq.data,
              })
            })
        })

    }
  }

  render() {
    return (
      <div>
        <div id="background" />
        <div className="container my-5">
          <h2 className="text-center text-light text-shadow-2 display-4"><b>{this.state.firstName} {this.state.lastName}</b></h2>

          <div className="row justify-content-center my-3">
            <div className="col text-center">
              <img
                src="images/profile.png"
                className="box" alt="profile"
                width="250"
                height="250"
              />
            </div>
          </div>  
        </div>

        <div className="container">
          <div className="row justify-content-center mt-5 mb-2 text-light text-shadow-3">
            <h2 className="text-center"><b>My Recipes</b></h2>
          </div>
          
          <div className="row input-large">
            {this.state.content.map((meal, index) => {
              return <DisplayMeal display={this.handleShow} meal={meal} index={index} />
            })}

          </div>
        </div>
 
        <Modal show={this.state.show} onHide={this.handleClose} backdrop="static" centered>
          <Modal.Header closeButton className="mx-3 mt-2">
            <Modal.Title>
              <h4><strong>{this.state.foodName}</strong></h4>
              <h5 className="mb-0">Calories: { this.state.calories }</h5>
              {/* <br></br>
              Total Servings: X Servings */}
              {/* {this.state.servingSize} */}
            </Modal.Title>
          </Modal.Header>

          <Modal.Body className="mx-3 mb-2">
            <strong>Ingredients</strong>
            <br/>
            {this.state.ingredients.map((ingredients) => {
            if (ingredients !== "")
              return <li>{ingredients.trim().toLowerCase()}</li>
            })}

            <br />
            
            <strong>Instructions</strong>
            <br/>
            {this.state.instructions.map((instruction) => {
              if (instruction !== "")
                return <li>{instruction.trim()}</li>

            })}
          </Modal.Body>
        </Modal>

      </div>  
    )
  }

}

export default Profile;