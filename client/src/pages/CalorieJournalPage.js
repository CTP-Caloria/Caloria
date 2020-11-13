import React from 'react';
import {Button, Modal, FormControl, Form} from 'react-bootstrap';
const axios = require('axios');
    
    //import Redirect from 'react-router-dom';

const formValid = ({...rest }) => {
    let valid = true;
  
    // check to see if form fields are empty
    Object.values(rest).forEach(val => {

        if (val === "")
            valid = false;
    });
    return valid
};
    function todayInString() {
        let today = new Date();

        const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday','Thursday', 'Friday', 'Saturday'];

        return weekday[today.getDay()];
    }

    class CalorieJournalPage extends React.Component {

        state = {
            mealType:"",
            food:"",
            servingSize:"",
            units:"",
            show: false
        }

        handleClose = () => {
            console.log("submit");
            this.setState({
                show: false
            })
        }
        handleShow = () => {
            console.log("Hello");
            this.setState({
                show: true
            })
        }

        handleChange=e =>{
            e.preventDefault();
            const { name, value } = e.target;
            console.log(name,value);


            this.setState({
            [name]: value
            }, () => console.log(this.state));

        // console.log(this.state);

        }

        handleSubmit=(e)=>{
            e.preventDefault();


            if (formValid(this.state)) {

                let today = new Date();
                let year = today.getFullYear();
                let month = (today.getMonth() + 1);
                let date = (today.getDate());
                let dateOnly = `${year}-${month}-${date}`

                axios({
                    method: 'post',
                    url: 'http://localhost:8080/api/entries/create/',
                    headers: {
                        "Access-Control-Allow-Origin": "*"

                    },
                 
                    data: {
                        Food: this.state.food,
                        totalCalories: "200",
                        dateOnly: dateOnly,
                        requesterID: "3",
                        mealID: this.state.mealType
                    }
                });
              
               

                console.log(`
            --SUBMITTING--
            Meal Type: ${this.state.mealType}
            Food: ${this.state.food}
            Serving Size: ${this.state.servingSize}
            Units: ${this.state.units}
            Date: ${dateOnly}
            
           
           
            `);
            
            } else {
                console.error(`FROM INVALID -DISPLAY ERROR MESSAGE`);
            }
        }
        

        render() {
            return (
                <div>
                    <h1 className="display-2 mt-5 mb-3">Hello, { todayInString() }!</h1>
                    
                    <Button variant="dark" onClick={this.handleShow}>+</Button>
                    
                    <Modal show={this.state.show} onHide={this.handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Add Entry</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Group className="col-12">
                                    <Form.Label htmlFor="inlineFormCustomSelectPref">
                                        Meal
                                    </Form.Label>
                                    <Form.Control
                                        as="select"
                                        className="ml-2 w-auto"
                                        id="inlineFormCustomSelectPref"
                                        custom
                                        name="mealType"
                                        onChange={this.handleChange.bind(this)}
                                        
                                    >
                                        <option value="0">Meal Type</option>
                                        <option value="1">Breakfast</option>
                                        <option value="2">Lunch</option>
                                        <option value="3">Dinner</option>
                                        <option value="4">Snack</option>
                                        
                                    </Form.Control>
                                </Form.Group>
  
                                <Form.Group className="col-12">
                                    <Form.Label>Food</Form.Label>

                                    <FormControl
                                            aria-label="Default"
                                            aria-describedby="inputGroup-sizing-default"
                                            name="food"
                                            onChange={this.handleChange}
                                    />
                                    
                                </Form.Group>
                                
                                <div className="row ml-0">
                                    <Form.Group className="col-4">
                                        <Form.Label>Serving Size</Form.Label>
                                        <FormControl 
                                            type="number"
                                            aria-label="Default"
                                            aria-describedby="inputGroup-sizing-default"
                                            name="servingSize"
                                            onChange={this.handleChange}
                                        />
                                    </Form.Group>
                    
                                    <Form.Group className="col-4">
                                        <Form.Label htmlFor="inlineFormCustomSelectPref">
                                            Unit
                                        </Form.Label>
                                        <Form.Control
                                            as="select"
                                            id="inlineFormCustomSelectPref"
                                            custom
                                            name="units"
                                            onChange={this.handleChange.bind(this)}
                                        >
                                            <option value="0" >Unit Size</option>
                                            <option value="Cups" >Cups</option>
                                            <option value="Grams">Grams</option>
                                            <option value="Ounces">Ounces</option>
                                            <option value="Teaspoons">Teaspoons</option>
                                            <option value="Tablespoons">Tablespoons</option>
                            
                                            
                                        </Form.Control>
                                    </Form.Group>
                                </div>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.handleClose}>
                                Close
                                </Button>
                            <Button variant="primary" type ="submit"onClick={this.handleSubmit}>
                                Submit
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>

            )
        }
    }


    export default CalorieJournalPage;