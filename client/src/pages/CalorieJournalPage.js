    import React from 'react';
    import {Button, Modal, FormControl, Form} from 'react-bootstrap';
    //import Redirect from 'react-router-dom';

    function todayInString() {
        let today = new Date();
        const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday','Thursday', 'Friday', 'Saturday'];

        return weekday[today.getDay()];
    }

    class CalorieJournalPage extends React.Component {

        state = {
            show: false
        }

        handleClose = () => {
            this.setState({
                show: false
            })
        }
        handleShow = () => {
            this.setState({
                show: true
            })
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
                            <Form>
                                <Form.Group className="col-12">
                                    <Form.Label htmlFor="inlineFormCustomSelectPref">
                                        Meal
                                    </Form.Label>
                                    <Form.Control
                                        as="select"
                                        className="ml-2 w-auto"
                                        id="inlineFormCustomSelectPref"
                                        custom
                                    >
                                        <option value="0">Breakfast</option>
                                        <option value="1">Lunch</option>
                                        <option value="2">Dinner</option>
                                    </Form.Control>
                                </Form.Group>
  
                                <Form.Group className="col-12">
                                    <Form.Label>Food</Form.Label>
                                    <FormControl
                                            aria-label="Default"
                                            aria-describedby="inputGroup-sizing-default"
                                    />
                                </Form.Group>
                                
                                <div className="row ml-0">
                                    <Form.Group className="col-4">
                                        <Form.Label>Serving Size</Form.Label>
                                        <FormControl 
                                            type="number"
                                            aria-label="Default"
                                            aria-describedby="inputGroup-sizing-default"
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
                                        >
                                            <option value="0">Cups</option>
                                            <option value="1">Grams</option>
                                            <option value="2">Ounces</option>
                                            <option value="3">Teaspoons</option>
                                            <option value="4">Tablespoons</option>
                                        </Form.Control>
                                    </Form.Group>
                                </div>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.handleClose}>
                                Close
                                </Button>
                            <Button variant="primary" onClick={this.handleClose}>
                                Submit
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>

            )
        }
    }


    export default CalorieJournalPage;