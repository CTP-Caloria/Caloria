import React from 'react';
// import { Button, Container, Card } from 'react-bootstrap';
// import { get } from '../../../api/controllers';
import auth from '../services/auth';
import { Link } from 'react-router-dom';
import { BsPlusSquare } from 'react-icons/bs';
import { Button, Modal, FormControl, Form } from 'react-bootstrap';
const axios = require('axios');


function DisplayMeal(props) {
  return (
    <div className="card my-3 box col-sm-3 mx-3">
      <div className="card-header">
        {/* <a href={"http://localhost:3000/recipe/" + props.meal.strMeal}>{props.meal.strMeal}</a> */}
        <Link to={`/displaymyrecipe/${props.meal.id}`}>{props.meal.name}</Link>
        <BsPlusSquare
          type="button"
          className="ml-2"
          onClick={props.display}
        />


      </div>
      <div className="card-body">

        {/* <img className="rounded float-left w-50 mr-3" src={props.meal.name} alt={props.meal.name} /> */}
        <ul className="list-unstyled text-left">
          <li><strong>Meal Name:</strong> {props.meal.name}</li>
          <li><strong>Total Calories:</strong> {props.meal.totalCalories}</li>
          {/* <li><strong>Tags:</strong> {props.meal.strTags}</li> */}
        </ul>
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
  }


  handleClose = () => {
    this.setState({
      show: false,
    })
  }

  handleShow = () => {
    this.setState({
      show: true
    })
  }
  componentDidMount() {
    if (auth.isAuthenticated) {
      let id = auth.userID;
      axios({
        method: 'get',
        url: `http://localhost:8080/api/profiles/${id}`,
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
            url: `http://localhost:8080/api/myRecipes/getRecipe/${id}`,
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

        <div className="row justify-content-center my-5 text-light text-shadow-3">
          <h2><b>My Recipes</b></h2>
        </div>

        <div className="row">
          {this.state.content.map((meal) => {
            return <DisplayMeal display={this.handleShow} meal={meal} />
          })}

        </div>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Entry</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          </Modal.Body>
          <Modal.Footer>
                <Button variant="secondary" onClick={this.handleClose}>
                    Close
                  </Button>

          </Modal.Footer>
        </Modal>
      </div>
    )
  }

}

export default Profile;