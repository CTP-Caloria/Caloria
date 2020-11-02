import React from 'react';
import { Modal, Button, Form,Col,} from 'react-bootstrap';

export default class RegisterModal extends React.Component {
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
                <Button variant="primary" onClick={this.handleShow}> Register
                    
                    </Button>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Register</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                        <Form.Row>
                                <Col>
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control 
                                        aria-label="Default"
                                        aria-describedby="inputGroup-sizing-default"
                                       />
                                </Col>
                                <Col>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control 
                                        aria-label="Default"
                                        aria-describedby="inputGroup-sizing-default"
                                       />
                                </Col>
                            </Form.Row>
                             <Form.Row>
                                <Col>
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control 
                                        aria-label="Default"
                                        aria-describedby="inputGroup-sizing-default"
                                       />
                                </Col>
                                <Col>
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control 
                                        aria-label="Default"
                                        aria-describedby="inputGroup-sizing-default"
                                       />
                                </Col>
                            </Form.Row>
                            <Form.Row>
                                <Col>
                                <Form.Label>Email Address</Form.Label>
                                    <Form.Control 
                                        aria-label="Default"
                                        aria-describedby="inputGroup-sizing-default"
                                       />
                                </Col>
                                <Col>
                                </Col>
                            </Form.Row>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                            </Button>
                        <Button variant="primary" onClick={this.handleClose}>
                            Register
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>

        )
    }
};