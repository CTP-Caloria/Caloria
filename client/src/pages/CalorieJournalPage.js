import React from 'react';
import { Button, Modal, FormControl, Form } from 'react-bootstrap';
import { 
    // BsCalendar, 
    // BsCalendarFill, 
    BsPlusSquare, 
    // BsPlusSquareFill 
} from 'react-icons/bs';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

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

function MealCard(props) {
    return (
        <div className="card">
            
            <div className="card-body">
                <h5 className="card-title" id="mealType">Meal Type</h5>
            </div>

        </div>
    )
}

class CalorieJournalPage extends React.Component {

    state = {
        mealType:"",
        food:"",
        servingSize:"",
        units:"",
        selectedDay: "",
        show: false
    }

    handleClose = () => {
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
                url: 'http://localhost:8080/api/entries/create',
                headers: {
                    "Access-Control-Allow-Origin": "*"

                },
                
                data: {
                    Food: this.state.food,
                    totalCalories: "200",
                    dateOnly: dateOnly,
                    requesterID: "1",
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

        this.setState({ show: false });
    }

    handleCalendar(day) {
        this.setState({ selectedDay: day });
    }

    render() {
        return (
            <div>
                <h1 className="display-2 mt-5 mb-3">Hello, { todayInString() }!</h1>

                <div className="container my-5">
                    <div className="card">
                        <div className="card-header">
                            <h5>Summary</h5>
                        </div>
                        <div>
                            <div className="row">
                                <div className="col-auto mr-auto ml-3 mt-3">Today's goal: </div>
                                <BsPlusSquare 
                                    type="button" 
                                    className="col-auto ml-auto mr-3 mt-4" 
                                    onClick={this.handleShow}
                                /> 
                            </div>
                            <div className="row">
                                <div className="col-auto mr-auto ml-3 my-3">Calories so far: </div>   
                                <div className="col-auto ml-auto mr-3 my-3">
                                    <DayPickerInput onDayChange={() => this.handleCalendar()} />
                                </div>    
                                
                                {/* <BsCalendar
                                    type="button"
                                    className="col-auto ml-auto mr-3 mt-3"
                                    // onClick={  } 
                                /> */}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row row-cols-1 row-cols-md-2">
                    <div className="col mb-4"><MealCard /></div>
                    <div className="col mb-4"><MealCard /></div>
                    <div className="col mb-4"><MealCard /></div>
                    <div className="col mb-4"><MealCard /></div>

                </div>
                
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