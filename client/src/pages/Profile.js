import React from 'react';
import {Button,Container,Card} from 'react-bootstrap';
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
  // state={ 
  //   title: "",
  //   info: "",
  //   img: [],
  // }

  // handleSearch = (e) => {
  //   e.preventDefault();
  //   fetch('http://localhost:8080/api/profiles/' + e.target.value)
  //   .then(res => 
  //     res.json())
  //     .then(json =>
  //       {this.setState})
  // }



  render(){
    return(
      <div>
        <div>
          <h3> My Profile</h3>
        </div>
        <div>
          <p>First Name Last Name</p>
          <p>email</p>
        </div>
        <div>
          <h4>My Recipes</h4>
        </div>
      </div>

    )
  }

}

export default Profile;