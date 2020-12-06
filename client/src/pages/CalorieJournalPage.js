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
        show: false,
        breakfastArray: [],
        lunchArray: [],
        dinnerArray: [],
        snackArray: [],
        totalCalories: 0,
        foodCalories: 0,
        caloriesSoFar: 0,

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
        //   this.calculateCalories();
        // if (auth.isAuthenticated) {


            if (formValid(this.state)) {
                // let calories;




                console.log(this.state.totalCalories);


                let today = new Date();
                let year = today.getFullYear();
                let month = (today.getMonth() + 1);
                let date = (today.getDate());
                console.log(date);
                let dateOnly = `${year}-${month}-${date}`

                let amount = this.state.servingSize + " " + this.state.units
                let food = this.state.food

                axios({
                    method: 'get',
                    url: `https://api.edamam.com/api/nutrition-data?app_id=a13b07cb&app_key=16baabeb65d884657c730df6ce3a525f&ingr=" + ${amount} + " " + ${food}`,
                    headers: {
                        "Access-Control-Allow-Origin": "*"
                    },


                }).then(calories => {
                    console.log(calories.data);
                    this.setState({
                        foodCalories: calories.data.calories,
                        totalCalories: this.state.caloriesSoFar + calories.data.calories,
                    });

                }).then(() => {

                    axios({
                        method: 'post',
                        url: '/api/entries/create',
                        headers: {
                            "Access-Control-Allow-Origin": "*"
                        },

                        data: {
                            food: this.state.food,
                            totalCalories: this.state.foodCalories,
                            dateOnly: dateOnly,
                            requesterID: auth.userID,
                            mealID: this.state.mealType,
                            servingSize: amount
                        }
                    })
                        .then(getData => {
                            console.log(getData);

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

                        }).then(req => {

                            axios({
                                method: 'put',
                                url: `/api/journals/update/${auth.userID}/${dateOnly}`,
                                headers: {
                                    "Access-Control-Allow-Origin": "*"
                                },

                                data: {
                                    // dateOnly: dateOnly,
                                    totalCalories: this.state.totalCalories,
                                    // requesterID: auth.userID,
                                }
                            }).then(() => {

                                axios({
                                    method: 'get',
                                    url: `/api/journals/getCalories/${auth.userID}/${dateOnly}`,
                                    headers: {
                                        "Access-Control-Allow-Origin": "*"
                                    }
                                })
                                    .then(calories => {
                                        console.log(calories);
                                        let todayCalories = calories.data.totalCalories;
                                        this.setState({
                                            caloriesSoFar: todayCalories

                                        })
                                    })
                            })
                        }).catch(err => { console.log(err) });

                    console.log(`
                                --SUBMITTING--
                                Meal Type: ${this.state.mealType}
                                Food: ${this.state.food}
                                Serving Size: ${this.state.servingSize}
                                Units: ${this.state.units}
                                Date: ${dateOnly}`);
                })
            } else {
                console.error(`FORM INVALID - DISPLAY ERROR MESSAGE`);
            }
            this.setState({ show: false });
            // window.location.reload();
        // } else {
        //     alert("Please log in to use this feature!");
        // }
    }

    handleDayChange(selectedDay, modifiers, dayPickerInput) {
        let calories=0;
        const input = dayPickerInput.getInput();
        console.log(input.value);
        let date = input.value;
        console.log(date);
        // this.setState({
        //     selectedDay: 
        // });
        axios({
            method: 'get',
            url: `/api/journals/getCalories/${auth.userID}/${date}`,
            headers: {
                "Access-Control-Allow-Origin": "*"
            }
        }).then(res=>{
            console.log(res.status);
         

                axios({
                    method: 'get',
                    url: `/api/entries/getEntry/${auth.userID}/${date}`,
                    headers: {
                        "Access-Control-Allow-Origin": "*"
                    }
                })
                    .then(getReq => {
                        console.log(getReq.data);

                        let todayEntry = getReq.data;

                        let lunch = [];
                        let dinner = [];
                        let snack = [];
                        let breakfast = [];

                        todayEntry.forEach((item) => {

                            console.log(item);
                            // let mealID=item.mealID
                            calories += parseInt(item.totalCalories);
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
                            caloriesSoFar: res.data.totalCalories,
                            breakfastArray: breakfast,
                            lunchArray: lunch,
                            dinnerArray: dinner,
                            snackArray: snack,

                        })
                    })


            // }
        }).catch(err =>{
            console.log(err)
            this.setState({
                caloriesSoFar: 0,
                breakfastArray: [],
                lunchArray: [],
                dinnerArray: [],
                snackArray: [],
            })
        
        });
        

   
    }
    handleDayChange = this.handleDayChange.bind(this);


    componentDidMount() {
        // if (auth.isAuthenticated) {
            let id = auth.userID;
            let calories = 0;

            let today = new Date();
            let year = today.getFullYear();
            let month = (today.getMonth() + 1);
            let date = (today.getDate());
            let dateOnly = `${year}-${month}-${date}`



            axios({
                method: 'get',
                url: `/api/entries/getEntry/${id}/${dateOnly}`,
                headers: {
                    "Access-Control-Allow-Origin": "*"
                }
            })
                .then(getReq => {
                    console.log(getReq.data);

                    let todayEntry = getReq.data;

                    let lunch = [];
                    let dinner = [];
                    let snack = [];
                    let breakfast = [];
                    
                    todayEntry.forEach((item) => {

                        console.log(item);
                        // let mealID=item.mealID
                        calories += parseInt(item.totalCalories);
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
                }).then(() => {

                    axios({
                        method: 'post',
                        url: `/api/journals/create`,
                        headers: {
                            "Access-Control-Allow-Origin": "*"
                        },
                        data:{
                            requesterID: id,
                            dateOnly: dateOnly,
                            totalCalories: calories,
                        }
                    })
                        .then(()=> {
                            axios({
                                method: 'get',
                                url:`/api/journals/getCalories/${id}/${dateOnly}`,
                                headers: {
                                    "Access-Control-Allow-Origin": "*"
                                },
                            }).then(calories =>{

                                this.setState({
                                    caloriesSoFar: calories.data.totalCalories
                                })
                            })

                            

                            
                        })


                })
        // }
    }
  

    render() {
        // if (auth.isAuthenticated) {
            console.log("Authenticated: " + auth.userID+"HELLO");
        // } else {
        //     console.log("Not logged in");
        // }

        return (
            <div>
                <div id="background" />
                <div>
                    <h1 className="display-2 mt-5 mb-3 heading">Hello, {todayInString()}!</h1>

                    <div className="container my-5">
                        <div className="card box">
                            <div className="card-header">
                                <div className="row">
                                    <div className="col-auto mr-auto">
                                        <h5>Summary</h5>
                                    </div>
                                    <div className="col-auto ml-auto">
                                        <DayPickerInput
                                            selectedDays={ this.state.selectedDay } 
                                            onDayClick={ this.handleDayClick } 
                                        />
                                        <p>{this.state.selectedDay}</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="row">
                                    <div className="col-auto mr-auto ml-3 my-3">Calories so far: {this.state.caloriesSoFar}</div>

                                    <span className="ml-auto mr-5 my-3">
                                        ADD ENTRY
                                        <BsPlusSquare
                                            id="svg-btn"
                                            type="button"
                                            className="ml-3 mb-1"
                                            onClick={this.handleShow}
                                        />
                                    </span>

                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="row row-cols-1 row-cols-md-2">
                        <div className="col mb-4">
                            <div className="card box" id="breakfast" value="1">
                                <div className="card-body">
                                    <h5 className="card-title" id="mealType">Breakfast</h5>
                                    {this.state.breakfastArray.map((item) =>
                                        <div className="row" key={item.id}>
                                            <div className="col-4 mr-auto">{item.food}</div>
                                            <div className="col-4 mx-auto">{item.servingSize}</div>
                                            <div className="col-4 mr-auto">{item.totalCalories}</div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="col mb-4">
                            <div className="card box" id="lunch" value="2">
                                <div className="card-body">
                                    <h5 className="card-title" id="mealType">Lunch</h5>
                                    {this.state.lunchArray.map((item) =>
                                        <div className="row" key={item.id}>
                                            <div className="col-4 mr-auto">{item.food}</div>
                                            <div className="col-4 mx-auto">{item.servingSize}</div>
                                            <div className="col-4 mr-auto">{item.totalCalories}</div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="col mb-4">
                            <div className="card box" id="dinner" value="3">
                                <div className="card-body">
                                    <h5 className="card-title" id="mealType">Dinner</h5>
                                    {this.state.dinnerArray.map((item) =>
                                        <div className="row" key={item.id}>
                                            <div className="col-4 mr-auto">{item.food}</div>
                                            <div className="col-4 mx-auto">{item.servingSize}</div>
                                            <div className="col-4 ml-auto">{item.totalCalories}</div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="col mb-4">
                            <div className="card box" id="snack" value="4">
                                <div className="card-body">
                                    <h5 className="card-title" id="mealType">Snack</h5>
                                    {this.state.snackArray.map((item) =>
                                        <div className="row" key={item.id}>
                                            <div className="col-4 mr-auto">{item.food}</div>
                                            <div className="col-4 mx-auto">{item.servingSize}</div>
                                            <div className="col-4 ml-auto">{item.totalCalories}</div>
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
                                        <option selected disabled hidden>Choose one</option>
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
                                            <option value="Serving" >Serving</option>
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
            </div>
            
        )
    }
}

export default CalorieJournalPage;