import React from 'react';
import {Button,Container,Card} from 'react-bootstrap';
import auth from '../services/auth';
const axios = require('axios');


// function myRecipes(props) {
//   return (
//     <Card>
//       <Card.Img>
//         {props.img}
//       </Card.Img>
//       <Card.Body>
//         <Card.Title>
//           <a href="http://localhost:8080/recipes">{props.title}</a>
//         </Card.Title>
//         <Card.Text>
//           {props.info}
//         </Card.Text>
//       </Card.Body>
//     </Card>
//   )
//}

class Profile extends React.Component {
  state={ 
    title: "",
    info: "",
    img: [],
    firstName: "",
    lastName: "",
    email: "",
  }
  

  // handleSearch = (e) => {
  //   e.preventDefault();
  //   fetch('http://localhost:8080/api/profiles/' + e.target.value)
  //   .then(res => 
  //     res.json())
  //     .then(json =>
  //       {this.setState})
  // }

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
      }
    })
    .then(getReq => {
      console.log(getReq.data);
      this.setState({ 
        firstName: getReq.data.firstName,
        lastName: getReq.data.lastName,
        email: getReq.data.email,
      })
    })

  }

}

  render(){
    return(

      <div>
        <div>
          <h3> My Profile</h3>
        </div>
        <div>
          <p>{this.state.firstName} {this.state.lastName}</p>
          <p>{this.state.email}</p>
        </div>
      
        <div>
          <h4>My Recipes</h4>
        </div>
      </div>

    )
  }

}

export default Profile;