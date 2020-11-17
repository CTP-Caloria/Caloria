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
import auth from '../services/auth';
// import { get } from '../../../api/controllers/entries';
//import Redirect from 'react-router-dom';

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

function todayInString() {
    let today = new Date();

    const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    return weekday[today.getDay()];
}

class CalorieJournalPage extends React.Component {

    state = {
        mealType: "",
        food: "",
        servingSize: "",
        units: "",
        // selectedDay: "",
        show: false,
        breakfastArray: [],
        lunchArray: [],
        dinnerArray: [],
        snackArray: [],
        // todayEntry: []
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

    handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        console.log(name, value);

        this.setState({
            [name]: value
        }, () => console.log(this.state));

        // console.log(this.state);
    }

    handleSubmit = (e) => {
        e.preventDefault();

        if (auth.isAuthenticated) {
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
                        food: this.state.food,
                        totalCalories: "200",
                        dateOnly: dateOnly,
                        requesterID: auth.userID,
                        mealID: this.state.mealType
                    }
                })
                .then(getData => {
                    console.log(getData.data);

                    let item = getData.data;

                    let breakfast = this.state.breakfastArray;
                    let lunch = this.state.lunchArray;
                    let dinner = this.state.dinnerArray;
                    let snack = this.state.snackArray;

                    // console.log(item.mealID);
                    switch (item.mealID) {
                        case 1:
                            breakfast.push(item);
                            break;
                        case 2:
                            lunch.push(item);
                            break;
                        case 3:
                            dinner.push(item);
                            break;
                        case 4:
                            snack.push(item);
                            break;
    
                        default:
                            break;
                    }
    
                    this.setState({
                        breakfastArray: breakfast,
                        lunchArray: lunch,
                        dinnerArray: dinner,
                        snackArray: snack,         
        
                    })

                })

                console.log(`
                    --SUBMITTING--
                    Meal Type: ${this.state.mealType}
                    Food: ${this.state.food}
                    Serving Size: ${this.state.servingSize}
                    Units: ${this.state.units}
                    Date: ${dateOnly}
            `   );
            } else {
                console.error(`FORM INVALID - DISPLAY ERROR MESSAGE`);
            }
            this.setState({ show: false });
            // window.location.reload();
        } else {
            alert("Please log in to use this feature!");
        }
    }

    // handleCalendar(day) {
    //     this.setState({ selectedDay: day });
    // }    

    componentDidMount() {
        if(auth.isAuthenticated) {
            let id = auth.userID;

            let today = new Date();
            let year = today.getFullYear();
            let month = (today.getMonth() + 1);
            let date = (today.getDate());
            let dateOnly = `${year}-${month}-${date}`
            
            axios({
                method: 'get',
                url: `http://localhost:8080/api/entries/getEntry/${id}/${dateOnly}`,
                headers: {
                    "Access-Control-Allow-Origin": "*"
                },
                data: {
                    food: this.state.food,
                    totalCalories: "200",
                    dateOnly: dateOnly,
                    requesterID: auth.userID,
                    mealID: this.state.mealType
                }
            })
            .then(getReq => {
                console.log(getReq.data);
    
                // this.setState({
                //     todayEntry: getReq.data,
    
                // })

                let todayEntry = getReq.data;
    
                let lunch = [];
                let dinner = [];
                let snack = [];
                let breakfast = [];
    
                todayEntry.forEach((item) => {
    
                    // console.log(item.mealID);
                    // let mealID=item.mealID
                    switch (item.mealID) {
                        case 1:
                            breakfast.push(item);
                            break;
                        case 2:
                            lunch.push(item);
                            break;
                        case 3:
                            dinner.push(item);
                            break;
                        case 4:
                            snack.push(item);
                            break;
    
                        default:
                            break;
                    }
                })
    
                this.setState({
                    breakfastArray: breakfast,
                    lunchArray: lunch,
                    dinnerArray: dinner,
                    snackArray: snack,         
    
                })
            })
        }
    }

    render() {
        if (auth.isAuthenticated) {
            console.log("Authenticated: " + auth.userID);
        } else {
            console.log("Not logged in");
        }

        return (
            <div>
                <h1 className="display-2 mt-5 mb-3">Hello, {todayInString()}!</h1>

                <div className="container my-5">
                    <div className="card">
                        <div className="card-header">
                            <div className="row">
                                <div className="col-auto mr-auto">
                                    <h5>Summary</h5>
                                </div>
                                <div className="col-auto ml-auto">
                                    <DayPickerInput />
                                    {/* onDayChange={() => this.handleCalendar()} */}
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="row">
                                <div className="col-auto mr-auto ml-3 mt-3">Today's goal: </div>
                                <span>
                                    <BsPlusSquare
                                    type="button"
                                    className="col-auto ml-auto mr-3 mt-4"
                                    onClick={this.handleShow}
                                    />
                                </span>
                                
                            </div>
                            <div className="row">
                                <div className="col-auto mr-auto ml-3 my-3">Calories so far: </div>

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
                    <div className="col mb-4">
                        <div className="card" id="breakfast" value="1">
                            <div className="card-body">
                                <h5 className="card-title" id="mealType">Breakfast</h5>
                                {this.state.breakfastArray.map((item) =>
                                    <div className="row" key={item.id}>
                                    <div className="col-auto mr-auto">{item.food}</div>
                                    <div className="col-auto ml-auto">{item.totalCalories}</div>
                                </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="col mb-4">
                        <div className="card" id="lunch" value="2">
                            <div className="card-body">
                                <h5 className="card-title" id="mealType">Lunch</h5>
                                {this.state.lunchArray.map((item) =>
                                    <div className="row" key={item.id}>
                                        <div className="col-auto mr-auto">{item.food}</div>
                                        <div className="col-auto ml-auto">{item.totalCalories}</div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="col mb-4">
                        <div className="card" id="dinner" value="3">
                            <div className="card-body">
                                <h5 className="card-title" id="mealType">Dinner</h5>
                                {this.state.dinnerArray.map((item) =>
                                    <div className="row" key={item.id}>
                                        <div className="col-auto mr-auto">{item.food}</div>
                                        <div className="col-auto ml-auto">{item.totalCalories}</div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="col mb-4">
                        <div className="card" id="snack" value="4">
                            <div className="card-body">
                                <h5 className="card-title" id="mealType">Snack</h5>
                                {this.state.snackArray.map((item) =>
                                    <div className="row" key={item.id}>
                                        <div className="col-auto mr-auto">{item.food}</div>
                                        <div className="col-auto ml-auto">{item.totalCalories}</div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add Entry</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group className="col-12">
                                <Form.Label htmlFor="mealType">
                                    Meal
                                </Form.Label>
                                <Form.Control
                                    as="select"
                                    className="ml-2 w-auto"
                                    id="mealType"
                                    custom
                                    name="mealType"
                                    onChange={this.handleChange.bind(this)}
                                >
                                    <option value="0" selected disabled hidden>Choose one</option>
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
                                        min="0"
                                        aria-label="Default"
                                        aria-describedby="inputGroup-sizing-default"
                                        name="servingSize"
                                        onChange={this.handleChange}
                                    />
                                </Form.Group>

                                <Form.Group className="col-4">
                                    <Form.Label htmlFor="unit">
                                        Unit
                                    </Form.Label>
                                    <Form.Control
                                        as="select"
                                        id="unit"
                                        custom
                                        name="units"
                                        onChange={this.handleChange.bind(this)}
                                    >
                                        <option selected disabled hidden>Choose...</option>
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
                        <Button variant="primary" type="submit" onClick={this.handleSubmit}>
                            Submit
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default CalorieJournalPage;