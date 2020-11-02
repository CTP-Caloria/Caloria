    import React from 'react';
    import {Button, Modal, InputGroup,FormControl,Form} from 'react-bootstrap';
    //import Redirect from 'react-router-dom';


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
        handlePreventDedault= (e) => {
            e.preventDefault();
            console.log('button was clicked');
            
        }

        render() {
            return (
                <>
                    <Button variant="primary" onClick={this.handleShow}> +
                        
                        </Button>
                    <Modal show={this.state.show} onHide={this.handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Add Entry</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form inline>
                                <Form.Label className="col-4" htmlFor="inlineFormCustomSelectPref">
                                    Meal
                                </Form.Label>
                                <Form.Control
                                    as="select"
                                    className="my-1 mr-sm-2"
                                    id="inlineFormCustomSelectPref"
                                    custom
                                >
                                    <option value="0">Breakfast</option>
                                    <option value="1">Lunch</option>
                                    <option value="2">Dinner</option>
                                </Form.Control>
  
                                <InputGroup className="col-12">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="inputGroup-sizing-default">Food</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl
                                            aria-label="Default"
                                            aria-describedby="inputGroup-sizing-default"
                                        />
                                    </InputGroup>
                            
                                <InputGroup className="col-6">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="inputGroup-sizing-default">Serving Size</InputGroup.Text>
                                    </InputGroup.Prepend>
                                        <FormControl 
                                            type="Number"
                                            aria-label="Default"
                                            aria-describedby="inputGroup-sizing-default"
                                        />
                                </InputGroup>
                                <div className = "col-6">

                                </div>
                                <Form.Label className="col-4" htmlFor="inlineFormCustomSelectPref">
                                        Unit
                                    </Form.Label>
                                    <Form.Control
                                        as="select"
                                        className="my-1 mr-sm-2"
                                        id="inlineFormCustomSelectPref"
                                        custom
                                    >
                                        <option value="0">Cups</option>
                                        <option value="1">Grams</option>
                                        <option value="2">Ounces</option>
                                        <option value="3">Teaspoons</option>
                                        <option value="4">Tablespoons</option>
                                    </Form.Control>`
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
                </>

            )
        }
    }


    export default CalorieJournalPage;