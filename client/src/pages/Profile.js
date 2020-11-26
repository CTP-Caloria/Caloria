import React from 'react';
// import { Button, Container, Card } from 'react-bootstrap';
// import { get } from '../../../api/controllers';
import auth from '../services/auth';
const axios = require('axios');

class Profile extends React.Component {
  state={ 
    title: "",
    info: "",
    img: [],
    firstName: "",
    lastName: "",
    email: "",
    name:"",
    description:""
  }

  componentDidMount(){
    if(auth.isAuthenticated) {
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
        })
      })

    }
  }

  render(){
    return(

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

        </div>

      </div>

    )
  }

}

export default Profile;