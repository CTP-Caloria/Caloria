import React from 'react';
import { Button, FormControl, Form } from 'react-bootstrap';
import auth from '../services/auth';

class CreatePage extends React.Component {
  state = {
    error: false,
    success: false,
    content: '',
  }

  contentChanged = (event) => {
    this.setState({
      content: event.target.value
    });
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
          <input type="text" className="form-control mt-1" id="recipeName"/>
        </div>

        <div className="row">
          <div className="form-group col">
            <label className="form-label" htmlFor="ingredients">Ingredients</label>
            <input type="text" className="form-control mt-1" id="ingredients"/>
          </div>
          <div className="form-group col">
            <label className="form-label" htmlFor="amount">Amount</label>
            <input type="number" min="0" className="form-control mt-1" id="amount"/>
          </div>
          <div className="form-group col">
            <label className="form-label" htmlFor="unit">Unit</label>
            <select className="form-control mt-1">
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
          <input type="text" className="form-control mt-1" id="instructions"/>
        </div>

        <div className="form-group row">
          <Button className="col-2 ml-auto" variant="secondary" onClick={this.handleClose}>
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